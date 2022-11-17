import './index.less'
import { createBem } from '../utils/create-bem'
import context from '../utils/context'
import listeners from '../utils/listeners'
import { getScroller } from '../utils/scroll'

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
            offset: 0,
            zIndex: context.zIndex,
            dom: '',
        }
    },
    methods: {
        changeValue(uid) {
            this.dom = getScroller(this.$parent.$el)
            if (!this.contentShow) {
                // 显示
                if (listeners.dropDownMenu.vnodes.length > 1) {
                    // 有多个DropDownMenu的显示
                    listeners.dropDownMenu.vnodes.forEach((vnode) => {
                        vnode.$children.forEach((child) => {
                            if (child._uid !== uid && child.contentShow) {
                                child.contentShow = !child.contentShow
                            } else if (child._uid === uid && !child.contentShow) {
                                child.contentShow = !child.contentShow
                            }
                        })
                    })
                } else {
                    // 单个DropDownMenu的显示
                    this.$parent.$children.forEach((value) => {
                        if (value.contentShow) {
                            value.contentShow = !value.contentShow
                        }
                    })
                    this.contentShow = !this.contentShow
                }
                document.body.classList.add('c-overflow-hidden')
                this.$parent.updateOffset(this.dom)
                this.bindScroll(this.dom)
            } else {
                // 隐藏
                document.body.removeAttribute('class')
                this.contentShow = !this.contentShow
                if (this.dom) {
                    this.dom.removeEventListener('scroll', this.onScroll)
                } else {
                    window.removeEventListener('scroll', this.onScroll)
                }
            }
            // this.$parent.itemShow = this.contentShow
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
        bindScroll(dom) {
            if (dom) {
                dom.addEventListener('scroll', this.onScroll)
            } else {
                window.addEventListener('scroll', this.onScroll)
            }
        },
        onScroll() {
            this.$parent.updateOffset(this.dom)
        },
    },
    render() {
        const bemItem = createBem('c-dropdown-item')
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
            <transition name="c-down">
                <div
                    class="c-dropdown-item--down"
                    style={{ top: this.offset + 'px', zIndex: this.zIndex + 3 }}
                    v-show={this.contentShow}
                >
                    <Popup value={this.contentShow} position="top">
                        <div class={bemItem('content')}>{options}</div>
                    </Popup>
                </div>
            </transition>
        )
    },
}
