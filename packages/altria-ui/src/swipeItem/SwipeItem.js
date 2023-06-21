import { createName } from '../utils/create-name'
import { createBem } from '../utils/create-bem'

export default {
    name: createName('swipe-item'),
    created() {
        this.bem = createBem('alt-swipe-item')
    },
    computed: {
        setStyle() {
            const style = {}
            const { size } = this.$parent
            if (size) {
                style.width = `${size}px`
            }
            if (this.offset) {
                style.transform = `translateX(${this.offset}px)`
            }
            return style
        },
    },
    data() {
        return {
            offset: 0,
        }
    },
    render() {
        return (
            <div {...{ on: this.$listeners }} class={this.bem()} style={this.setStyle}>
                {this.$slots.default}
            </div>
        )
    },
}
