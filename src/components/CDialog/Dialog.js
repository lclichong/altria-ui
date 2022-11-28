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
        beforeClose: {
            type: Function,
        },
        confirmButtonText: {
            type: String,
            default: '确定',
        },
        cancelButtonText: {
            type: String,
            default: '取消',
        },
        showConfirmButton: {
            type: Boolean,
            default: true,
        },
        showCancelButton: {
            type: Boolean,
        },
    },
    watch: {
        value(newVal) {
            if (newVal) {
                if (this.time) {
                    if (!this.hasTimer) {
                        this.hasTimer = true
                        this.timer = setTimeout(() => {
                            this.close()
                            this.hasTimer = false
                            clearTimeout(this.timer)
                        }, this.time)
                    }
                }
            } else {
                this.hasTimer = false
                clearTimeout(this.timer)
            }
        },
    },
    data() {
        return {
            timer: '',
            hasTimer: false,
            loading: {
                confirm: false,
                cancel: false,
            },
        }
    },
    methods: {
        changeValue(action) {
            if (!this.value) {
                return
            }
            if (this.hasTimer) {
                this.hasTimer = false
                clearTimeout(this.timer)
                this.close()
            } else {
                if (this.beforeClose) {
                    this.loading[action] = true
                    this.beforeClose(action, () => {
                        this.close()
                        this.loading.confirm = false
                        this.loading.cancel = false
                    })
                } else {
                    if (this._events.confirm && action === 'confirm') {
                        this.close()
                        this.$emit('confirm')
                    } else if (this._events.cancel && action === 'cancel') {
                        this.close()
                        this.$emit('cancel')
                    } else if (this.resolve && action === 'confirm') {
                        this.close()
                        this.callback(action)
                    } else if (this.reject && action === 'cancel') {
                        this.close()
                        this.callback(action)
                    } else {
                        this.close()
                    }
                }
            }
        },
        close() {
            this.$emit('input', false)
        },
        popupHide() {
            if (!this.beforeClose) {
                this.close()
            }
        },
    },
    render() {
        const bem = createBem('c-dialog')
        const content = this.$slots && this.$slots.default && this.$slots.default[0]

        return (
            <Popup v-on:hide={this.popupHide} value={this.value} overlay={this.overlay} class="c-popup--transparent">
                <div class={bem(null)}>
                    {this.title && <div class="c-dialog__title">{this.title}</div>}
                    <div class={['c-dialog__message', this.title ? '' : 'c-dialog--no-title']}>
                        {content ? content : this.message}
                    </div>
                    <div class="c-dialog__button__wrapper">
                        {this.showCancelButton && (
                            <Button
                                size="default"
                                onClick={this.changeValue.bind(this, 'cancel')}
                                loading={this.loading.cancel}
                                loadingColor="inherit"
                                load-type="circle"
                                class="c-dialog__button c-dialog__button--cancel"
                            >
                                {this.cancelButtonText}
                            </Button>
                        )}
                        {this.showConfirmButton && (
                            <Button
                                size="default"
                                onClick={this.changeValue.bind(this, 'confirm')}
                                loading={this.loading.confirm}
                                loadingColor="inherit"
                                load-type="circle"
                                class={['c-dialog__button', this.showCancelButton ? 'c-dialog__button--confirm' : '']}
                            >
                                {this.confirmButtonText}
                            </Button>
                        )}
                    </div>
                </div>
            </Popup>
        )
    },
}
