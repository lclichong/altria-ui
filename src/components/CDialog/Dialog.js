import './index.less'
import { createBem } from '../utils/create-bem'

export default {
    name: 'Dialog',
    props: {
        title: {
            type: String,
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
                    if (!this.hasTimer) {
                        this.hasTimer = true
                        this.timer = setTimeout(() => {
                            this.$emit('input', false)
                            this.popupShow = false
                            this.hasTimer = false
                            clearTimeout(this.timer)
                        }, this.time)
                    }
                } else {
                    this.popupShow = newVal
                }
            }
        },
    },
    data() {
        return {
            popupShow: false,
            timer: '',
            hasTimer: false,
        }
    },
    methods: {
        changeValue() {
            if (!this.value) {
                return
            }
            if (this.hasTimer) {
                this.hasTimer = false
                clearTimeout(this.timer)
            }
            this.popupShow = false
            this.$emit('input', false)
        },
    },
    render() {
        const bem = createBem('c-dialog')
        const content = this.$slots && this.$slots.default && this.$slots.default[0]
        const titleVNode = () => {
            if (this.title) {
                return <div class="c-dialog__title">{this.title}</div>
            }
        }

        return (
            <Popup value={this.popupShow} overlay={this.overlay} class="c-popup--transparent">
                <div class={bem(null)}>
                    {titleVNode()}
                    <div class={['c-dialog__message', this.title ? '' : 'c-dialog--no-title']}>
                        {content ? content : this.message}
                    </div>
                    <div onClick={this.changeValue} class="c-dialog__confirm">
                        <Button class="c-dialog__button">确定</Button>
                    </div>
                </div>
            </Popup>
        )
    },
}
