import './index.less'
import { createBem } from '../utils/create-bem'
import context from '../utils/context'
import listeners from '../utils/listeners'

export default {
    name: 'DropDownMenu',
    created() {
        listeners.dropDownMenu.vnodes.push(this)
        this.$nextTick(() => {
            this.children = this.$children
        })
    },
    mounted() {
        this.top = this.$el.offsetTop + 48
    },
    data: function() {
        return {
            itemShow: false,
            titles: [],
            children: [],
            top: 0,
            zIndex: context.zIndex,
        }
    },
    render() {
        const bem = createBem('c-dropdown-menu')
        const titles = this.children.map((child) => {
            child.top = this.top
            let array = []
            let vnode = (
                <div
                    onClick={child.changeValue.bind(this, child._uid)}
                    class={bem('item', { show: child.contentShow })}
                >
                    <div class="c-dropdown-menu__title">
                        <div class="c-ellipsis">{child.title}</div>
                    </div>
                </div>
            )
            array.push(vnode)
            return array
        })
        if (titles) {
            return (
                <div class="c-dropdown-menu">
                    <div class={['c-dropdown-menu__bar', this.itemShow ? 'c-dropdown-menu__bar--hide--shadow' : '']}>
                        {...titles}
                    </div>
                    {this.$slots.default}
                </div>
            )
        }
    },
}
