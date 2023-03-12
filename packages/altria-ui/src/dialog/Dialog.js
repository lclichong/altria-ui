import './index.less'
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'

export default {
    name: createName('dialog'),
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
        const bem = createBem('alt-dialog')
        const content = this.$slots && this.$slots.default && this.$slots.default[0]

        return (
            <alt-popup
                v-on:hide={this.popupHide}
                value={this.value}
                overlay={this.overlay}
                class="alt-popup--transparent"
            >
                <div class={bem(null)}>
                    {this.title && <div class={bem('title')}>{this.title}</div>}
                    <div class={[bem('message'), this.title ? '' : 'alt-dialog--no-title']}>
                        {content ? content : this.message}
                    </div>
                    {this.showConfirmButton && (
                        <div class={bem('button__wrapper')}>
                            {this.showCancelButton && (
                                <alt-button
                                    size="default"
                                    onClick={this.changeValue.bind(this, 'cancel')}
                                    loading={this.loading.cancel}
                                    load-color="inherit"
                                    load-type="circle"
                                    class={bem('button', { cancel: true })}
                                >
                                    {this.cancelButtonText}
                                </alt-button>
                            )}
                            <alt-button
                                size="default"
                                onClick={this.changeValue.bind(this, 'confirm')}
                                loading={this.loading.confirm}
                                load-color="inherit"
                                load-type="circle"
                                class={[bem('button'), this.showCancelButton ? bem('button', { confirm: true }) : '']}
                            >
                                {this.confirmButtonText}
                            </alt-button>
                        </div>
                    )}
                </div>
            </alt-popup>
        )
    },
}
