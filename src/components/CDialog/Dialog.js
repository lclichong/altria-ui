import './index.less'
import { createBem } from '../utils/create-bem'

export default {
    name: 'Dialog',
    props: {
        title: {
            type: String,
            default: '标题',
        },
        message: {
            type: String,
            default: '',
        },
        time: {
            type: Number,
        },
        value: {
            type: Boolean,
        },
        overlay: {
            type: Boolean,
            default: true,
        },
    },
    watch: {
        value(newVal) {
            if (newVal && this.time) {
                setTimeout(() => {
                    this.$emit('input', false)
                }, this.time)
            }
        },
    },
    methods: {
        hideDialog() {
            this.$emit('input', false)
        },
    },
    render() {
        const bem = createBem('c-dialog')
        const content = this.$slots && this.$slots.default && this.$slots.default[0]
        const overlay = () => {
            if (this.overlay) {
                return <Overlay visible={this.value}></Overlay>
            }
        }
        return (
            <div>
                {overlay()}
                <div class={bem(null, { show: this.value, hide: !this.value, 'del--border': this.overlay })}>
                    <div class="c-dialog__title">{this.title}</div>
                    <div class="c-dialog__content">{content ? content : this.message}</div>
                    <div class="c-dialog__confirm">
                        <button onClick={this.hideDialog} class="c-dialog__button">
                            确定
                        </button>
                    </div>
                </div>
            </div>
        )
    },
}
