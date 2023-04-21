import './index.less'
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'

export default {
    name: createName('overlay'),
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        zIndex: {
            type: [String, Number],
            default: 2000,
        },
    },
    methods: {
        hideOverlay() {
            if (!this.value) {
                return
            } else {
                this.$emit('input', false)
            }
        },
    },
    render() {
        const bem = createBem('alt-overlay')
        return (
            <div
                onClick={this.hideOverlay}
                style={{ zIndex: this.zIndex }}
                class={bem(null, { show: this.value, hide: !this.value })}
            >
                {this.$slots.default}
            </div>
        )
    },
}
