import './index.less'
import { createBem } from '../utils/create-bem'
import { context } from '../utils/context'

export default {
    name: 'Popup',
    created() {
        this.bem = createBem('c-popup')
        this.zIndex = context.zIndex
    },
    props: {
        overlay: {
            type: Boolean,
            default: true,
        },
        value: {
            type: Boolean,
            default: false,
        },
        position: {
            type: String,
            default: 'center',
        },
    },
    methods: {
        renderOverlay() {
            console.log(this.zIndex + 1)
            this.zIndex = this.zIndex + 1
            return (
                <div
                    onClick={this.hidePopup}
                    style={{ zIndex: this.zIndex }}
                    class={this.bem('overlay', { show: this.overlay && this.value, hide: this.overlay && !this.value })}
                ></div>
            )
        },
        renderContent() {
            console.log(this.zIndex + 1)
            this.zIndex = this.zIndex + 1
            return (
                <div style={{ zIndex: this.zIndex }} class={[this.bem('content'), `c-popup--${this.position}`]}>
                    {this.$slots.default}
                </div>
            )
        },
        hidePopup() {
            this.$emit('input', false)
        },
    },
    render() {
        return (
            <transition name="c-fade">
                <div style={{ zIndex: this.zIndex }} class={this.bem()} v-show={this.value}>
                    {this.overlay && this.renderOverlay()}
                    {this.value && this.renderContent()}
                </div>
            </transition>
        )
    },
}
