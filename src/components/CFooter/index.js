/*
 * @Author: LcLichong 
 * @Date: 2021-07-06 16:10:05 
 * @Last Modified by:   LcLichong 
 * @Last Modified time: 2021-07-06 16:10:05 
 */

export default {
    name: 'Footer',
    created: function created() {
        if (this.FooterList.length > 4) {
            console.error('Supports up to four bottom navigations')
            this.show = false
        } else {
            this.width = 100 / this.FooterList.length
        }
    },
    mounted: function mounted() {},
    props: {
        FooterList: {
            type: Array,
            default: () => []
        }
    },
    data: function data() {
        return {
            idx: 0,
            width: 0,
            show: true
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
                'class': 'cs-footer-overlay',
                'style': {
                    'display': this.idx === 0 ? 'none' : 'block'
                },
                'on': {
                    'click': () => {
                        this.idx = 0
                    }
                }
            })
            VNodeArray.push(vnode)

            let getMenu = (menuList) => {
                let menuArray = []
                for (let m of menuList) {
                    let vnode = h('div', {
                        'class': 'cs-footer-menu-div',
                        'key': m.idx,
                        'on': {
                            'click': this.menuClick.bind(this, m)
                        }
                    }, [
                        m.name
                    ])
                    menuArray.push(vnode)
                }
                return menuArray
            }
            for (let f of this.FooterList) {
                let vnode = h('div', {
                    'class': 'cs-footer-div',
                    'key': f.idx,
                    'on': {
                        'click': this.showMenu.bind(this, f.idx)
                    },
                    'style': {
                        'width': `${this.width}vw`
                    }
                }, [
                    f.name,
                    h('div', {
                        'class': `${this.idx === f.idx ? 'cs-footer-menu-active' : ''} cs-footer-menu`
                    }, [
                        ...getMenu(f.menuList)
                    ])
                ])
                VNodeArray.push(vnode)
            }
            return VNodeArray
        }
    },
    render: function render(h) {
        if (this.show) {
            let f = this.getFooter()
            return h('div', {
                'class': 'cs-footer'
            }, [
                [...f]
            ])
        }
    }
}