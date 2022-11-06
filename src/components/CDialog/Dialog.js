import './index.less'

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
    },
    methods: {
        btnClick() {
            this.hideDialog()
        },
        showDialog() {
            if (this.time) {
                this.$emit('input', true)
                setTimeout(() => {
                    this.$emit('input', false)
                }, this.time)
            } else {
                this.$emit('input', true)
            }
        },
        hideDialog() {
            this.$emit('input', false)
        },
    },
    render() {
        const content = this.$slots.default[0]
        return (
            <div>
                <Overlay visible={this.value}></Overlay>
                <div class={['c-dialog', this.value ? 'c-dialog--show' : 'c-dialog--hide']}>
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
