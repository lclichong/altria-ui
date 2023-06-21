import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'
import context from '../utils/context'
import listeners from '../utils/listeners'
import { ClickOutsideMixin } from '../mixins/click-outside'

export default {
    name: createName('dropdown-menu'),
    mixins: [
        ClickOutsideMixin({
            event: 'click',
            method: 'onClickOutside',
        }),
    ],
    created() {
        listeners.dropDownMenu.vnodes.push(this)
        this.$nextTick(() => {
            this.children = this.$children
        })
    },
    mounted() {
        this.offset = this.$el.offsetTop + 48 - window.scrollY
    },
    destroyed() {
        document.body.removeAttribute('class')
    },
    data() {
        return {
            itemShow: false,
            titles: [],
            children: [],
            offset: 0,
        }
    },
    methods: {
        updateOffset(dom) {
            if (dom) {
                this.offset = this.$el.offsetTop + 48 - dom.scrollTop
            } else {
                this.offset = this.$el.offsetTop + 48 - window.scrollY
            }
        },
        onClickOutside() {
            this.children.forEach((child) => {
                if (child.contentShow) {
                    child.popupHide()
                }
            })
        },
    },
    render() {
        const bem = createBem('alt-dropdown-menu')
        const titles = this.children.map((child) => {
            child.offset = this.offset
            let array = []
            let vnode = (
                <div
                    onClick={child.changeValue.bind(this, child._uid)}
                    class={bem('item', { show: child.contentShow })}
                >
                    <div class="alt-dropdown-menu__title">
                        <div class="alt-ellipsis">{child.title}</div>
                    </div>
                </div>
            )
            array.push(vnode)
            return array
        })
        if (titles) {
            return (
                <div class="alt-dropdown-menu">
                    <div
                        style={{ zIndex: this.itemShow ? context.zIndex + titles.length * 4 : '' }}
                        class="alt-dropdown-menu__bar"
                    >
                        {...titles}
                    </div>
                    {this.$slots.default}
                </div>
            )
        }
    },
}
