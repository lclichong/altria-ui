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
            if (newVal) {
                if (this.time) {
                    this.popupShow = newVal
                    setTimeout(() => {
                        this.$emit('input', false)
                        this.popupShow = false
                    }, this.time)
                } else {
                    this.popupShow = newVal
                }
            }
        },
    },
    data() {
        return {
            popupShow: false,
        }
    },
    methods: {
        hideDialog() {
            if (!this.value) {
                return
            }
            this.popupShow = false
            this.$emit('input', false)
        },
    },
    render() {
        const bem = createBem('c-dialog')
        const content = this.$slots && this.$slots.default && this.$slots.default[0]

        return (
            <Popup value={this.popupShow} overlay={this.overlay} class="c-popup--transparent">
                <div class={bem(null)}>
                    <div class="c-dialog__title">{this.title}</div>
                    <div class="c-dialog__content">{content ? content : this.message}</div>
                    <div onClick={this.hideDialog} class="c-dialog__confirm">
                        <button class="c-dialog__button">确定</button>
                    </div>
                </div>
            </Popup>
        )
    },
}
