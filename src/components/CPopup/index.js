import './index.less'
import { createBem } from '../utils/create-bem'
import context from '../utils/context'

export default {
    name: 'Popup',
    created() {
        this.bem = createBem('c-popup')
    },
    watch: {
        value: {
            handler(newValue) {
                if (newValue) {
                    context.zIndex += 3
                    this.zIndex = context.zIndex
                }
            },
            immediate: true,
        },
    },
    data() {
        return {
            zIndex: context.zIndex,
        }
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
        hidePopup() {
            this.$emit('input', false)
            if (this.$parent && this.$parent.hideDialog) {
                this.$parent.hideDialog()
            }
        },
        renderOverlay() {
            return <div onClick={this.hidePopup} style={{ zIndex: this.zIndex - 1 }} class={this.bem('overlay')}></div>
        },
        renderContent() {
            return (
                <div style={{ zIndex: this.zIndex }} class={[this.bem('content'), `c-popup--${this.position}`]}>
                    {this.$slots.default}
                </div>
            )
        },
    },
    render() {
        return (
            <transition name="c-fade">
                <div style={{ zIndex: this.zIndex - 2 }} class={this.bem()} v-show={this.value}>
                    {this.overlay && this.renderOverlay()}
                    <transition name={`c-pop-${this.position}`}>{this.value && this.renderContent()}</transition>
                </div>
            </transition>
        )
    },
}
