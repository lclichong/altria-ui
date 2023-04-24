import './index.less'
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'
import context from '../utils/context'
import AltOverlay from '../overlay'

export default {
    name: createName('popup'),
    components: {
        AltOverlay,
    },
    created() {
        this.bem = createBem('alt-popup')
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
            if (!this.value) {
                return
            }
            if (this._events.hide) {
                this.$emit('hide')
            } else {
                this.$emit('input', false)
            }
        },
        renderOverlay() {
            return (
                <alt-overlay
                    value={this.value}
                    onClick={this.hidePopup}
                    zIndex={this.zIndex - 1}
                    class={this.bem('overlay')}
                ></alt-overlay>
            )
        },
        renderContent() {
            return (
                <div style={{ zIndex: this.zIndex }} class={[this.bem('content'), `alt-popup--${this.position}`]}>
                    {this.$slots.default}
                </div>
            )
        },
    },
    render() {
        return (
            <transition name="alt-fade">
                <div style={{ zIndex: this.zIndex - 2 }} class={this.bem()} v-show={this.value}>
                    {this.overlay && this.renderOverlay()}
                    <transition name={`alt-pop-${this.position}`}>{this.value && this.renderContent()}</transition>
                </div>
            </transition>
        )
    },
}
