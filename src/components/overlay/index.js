import './index.less'
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'

export default {
    name: createName('overlay'),
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
    },
    render() {
        const bem = createBem('alt-overlay')
        return <div class={bem(null, { show: this.visible, hide: !this.visible })}>{this.$slots.default}</div>
    },
}
