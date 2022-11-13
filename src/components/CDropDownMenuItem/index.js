import './index.less'
import { createBem } from '../utils/create-bem'

export default {
    name: 'DropDownMenuItem',
    props: {
        value: {
            type: [String, Array],
            default: '',
        },
        options: {
            type: Array,
            default: () => [],
        },
        title: {
            type: String,
        },
    },
    data() {
        return {
            contentShow: false,
        }
    },
    methods: {
        changeValue() {
            if (!this.contentShow) {
                this.$parent.$children.forEach((value) => {
                    if (value.contentShow) {
                        value.contentShow = false
                    }
                })
                this.contentShow = !this.contentShow
            } else {
                this.contentShow = !this.contentShow
            }
            this.$parent.itemShow = this.contentShow
        },
        changeOption(option) {
            let optionVal = option.value
            // props.value类型是string代表单选，props.value类型是Array代表多选
            if (typeof this.value === 'string') {
                if (this.value === optionVal) {
                    this.$emit('input', '')
                } else {
                    this.$emit('input', optionVal)
                }
            } else {
                if (this.value.length == 0) {
                    this.value.push({
                        value: optionVal,
                    })
                } else {
                    let result = true
                    for (let i = 0; i < this.value.length; i++) {
                        if (this.value[i].value === optionVal) {
                            result = false
                            this.value.splice(i, 1)
                        }
                    }
                    if (result) {
                        this.value.push({
                            value: optionVal,
                        })
                    }
                }
            }
        },
    },
    render() {
        const bemItem = createBem('c-dropdown-item')
        const bem = createBem('c-dropdown-menu')

        const options = this.options.map((option) => {
            let active = false
            if (typeof this.value === 'string') {
                active = this.value === option.value
            } else {
                for (let i = 0; i < this.value.length; i++) {
                    if (this.value[i].value === option.value) {
                        active = true
                        break
                    }
                }
            }
            return (
                <div
                    onClick={() => {
                        this.changeOption(option)
                    }}
                    class={['c-dropdown-item__option', active ? 'c-dropdown-item__option__active' : '']}
                >
                    {option.text}
                    <svg
                        class={[
                            'c-dropdown-item__option__svg',
                            active ? 'c-dropdown-item__option__svg--show' : 'c-dropdown-item__option__svg--hide',
                        ]}
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        data-testid="geist-icon"
                        shape-rendering="geometricPrecision"
                        viewBox="0 0 24 24"
                        data-v-02fcfef8
                        style="color: currentcolor;"
                    >
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                </div>
            )
        })
        return (
            <div class={bem('item', { show: this.contentShow })}>
                <div onClick={this.changeValue} class="c-dropdown-menu__title">
                    <div class="c-ellipsis">{this.title}</div>
                </div>
                <Popup value={this.contentShow} position="top">
                    <div class={bemItem('content')}>{options}</div>
                </Popup>
            </div>
        )
    },
}
