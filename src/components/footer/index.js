import './index.less'
import { createName } from '../utils/create-name'

export default {
    name: createName('footer'),
    created() {
        this.width = 100 / this.footerList.length
        this.defaultHeight = document.documentElement.clientHeight
        window.onresize = () => {
            this.defaultHeight > document.documentElement.clientHeight ? (this.show = false) : (this.show = true)
        }
    },
    props: {
        footerList: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            idx: 0,
            width: 0,
            show: true,
            defaultHeight: 0,
        }
    },
    methods: {
        showMenu: function showMenu(idx) {
            this.idx = idx === this.idx ? 0 : idx
        },
        menuClick: function menuClick(m, e) {
            e = window.event || e
            if (e.stopPropagation) {
                e.stopPropagation() // IE下阻止事件冒泡
            } else if (e.cancelBubble) {
                e.cancelBubble = true // 其他浏览器阻止事件冒泡
            }
            this.$emit('menuClick', m)
        },
        getFooter: function getFooter() {
            let h = this.$createElement
            let VNodeArray = []

            let vnode = h('div', {
                class: 'alt-footer-overlay',
                style: {
                    display: this.idx === 0 ? 'none' : 'block',
                },
                on: {
                    click: () => {
                        this.idx = 0
                    },
                },
            })
            VNodeArray.push(vnode)

            let getMenu = (menuList) => {
                let menuArray = []
                for (let m of menuList) {
                    let vnode = h(
                        'div',
                        {
                            class: 'alt-footer-menu-div',
                            key: m.idx,
                            on: {
                                click: this.menuClick.bind(this, m),
                            },
                        },
                        [m.name]
                    )
                    menuArray.push(vnode)
                }
                return menuArray
            }
            for (let f of this.footerList) {
                let vnode = h(
                    'div',
                    {
                        class: 'alt-footer-div',
                        key: f.idx,
                        on: {
                            click: this.showMenu.bind(this, f.idx),
                        },
                        style: {
                            width: `${this.width}vw`,
                        },
                    },
                    [
                        f.name,
                        h(
                            'div',
                            {
                                class: `${this.idx === f.idx ? 'alt-footer-menu-active' : ''} alt-footer-menu`,
                            },
                            [...getMenu(f.menuList)]
                        ),
                    ]
                )
                VNodeArray.push(vnode)
            }
            return VNodeArray
        },
    },
    render() {
        if (this.show) {
            let f = this.getFooter()
            return this.$createElement(
                'div',
                {
                    class: 'alt-footer',
                    ref: 'altFooter',
                },
                [[...f]]
            )
        }
    },
}
