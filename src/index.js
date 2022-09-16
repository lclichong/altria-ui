import Footer from './components/CFooter'
import Swipe from './components/CSwipe'
import SwipeItem from './components/CSwipeItem'
import Header from './components/CHeader'
import Dialog from './components/CDialog'
import Cell from './components/CCell'
import Input from './components/CInput'
import Button from './components/CButton'
import DropDownMenu from './components/CDropDownMenu'
import DropDownMenuItem from './components/CDropDownMenuItem'
import './components/index.less'
import './icon/iconfont'

const version = '1.0'

function install(Vue) {
    Vue.use(Dialog)
    let components = [Footer, Swipe, SwipeItem, Header, Cell, Input, Button, DropDownMenu, DropDownMenuItem]
    components.forEach(function(item) {
        if (item.name) {
            Vue.component(item.name, item)
        }
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    // 引用vue.js时，调用install
    console.log('install for window.Vue...')
    install(window.Vue)
}

export { install, version, Footer, Swipe, SwipeItem, Header, Dialog, Cell, Input, Button }
export default {
    install: install,
    version: version,
}
