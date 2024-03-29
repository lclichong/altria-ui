import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'
import context from '../utils/context'
import listeners from '../utils/listeners'
import { getScroller } from '../utils/scroll'
import AltIcon from '../icon'
import AltPopup from '../popup'

export default {
    name: createName('dropdown-item'),
    components: {
        AltIcon,
        AltPopup,
    },
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
                        let itemShow = false
                        vnode.$children.forEach((child) => {
                            if (child._uid !== uid && child.contentShow) {
                                child.contentShow = !child.contentShow
                            } else if (child._uid === uid && !child.contentShow) {
                                itemShow = true
                                child.contentShow = !child.contentShow
                            }
                        })
                        vnode.itemShow = itemShow
                    })
                } else {
                    // 单个DropDownMenu的显示
                    this.$parent.$children.forEach((value) => {
                        if (value.contentShow) {
                            value.contentShow = !value.contentShow
                        }
                    })
                    this.contentShow = !this.contentShow
                    this.$parent.itemShow = this.contentShow
                }
                document.body.classList.add('alt-overflow-hidden')
                this.$parent.updateOffset(this.dom)
                this.bindScroll(this.dom)
            } else {
                // 隐藏
                document.body.removeAttribute('class')
                this.contentShow = !this.contentShow
                this.$parent.itemShow = false
                if (this.dom) {
                    this.dom.removeEventListener('scroll', this.onScroll)
                } else {
                    window.removeEventListener('scroll', this.onScroll)
                }
            }
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
        popupHide() {
            this.changeValue()
        },
    },
    render() {
        const bemItem = createBem('alt-dropdown-item')
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
                    class={['alt-dropdown-item__option', active ? 'alt-dropdown-item__option__active' : '']}
                >
                    {option.text}
                    <alt-icon
                        class={[
                            'alt-dropdown-item__option__svg',
                            active ? 'alt-dropdown-item__option__svg--show' : 'alt-dropdown-item__option__svg--hide',
                        ]}
                        name="check"
                    ></alt-icon>
                </div>
            )
        })
        return (
            <transition name="alt-down">
                <div
                    class="alt-dropdown-item--down"
                    style={{ top: this.offset + 'px', zIndex: context.zIndex + 3 }}
                    v-show={this.contentShow}
                >
                    <alt-popup v-on:hide={this.popupHide} value={this.contentShow} position="top">
                        <div class={bemItem('content')}>{options}</div>
                    </alt-popup>
                </div>
            </transition>
        )
    },
}
