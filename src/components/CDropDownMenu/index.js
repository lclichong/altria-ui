import './index.less'
import { createBem } from '../utils/create-bem'

export default {
    name: 'DropDownMenu',
    created() {
        this.$nextTick(() => {
            this.children = this.$children
        })
    },
    data: function() {
        return {
            itemShow: false,
            titles: [],
            children: [],
        }
    },
    render() {
        const bem = createBem('c-dropdown-menu')
        const titles = this.children.map((child) => {
            let array = []
            let vnode = (
                <div class={bem('item', { show: child.contentShow })}>
                    <div onClick={child.changeValue} class="c-dropdown-menu__title">
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
