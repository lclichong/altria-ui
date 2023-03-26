import Button from './button/index.js'
import Footer from './footer/index.js'
import Swipe from './swipe/index.js'
import SwipeItem from './swipeItem/index.js'
import Header from './header/index.js'
import Dialog from './dialog/index.js'
import Cell from './cell/index.js'
import Input from './input/index.js'
import DropDownMenu from './dropdown-menu/index.js'
import DropDownMenuItem from './dropdown-item/index.js'
import Loading from './loading'
import Overlay from './overlay'
import Popup from './popup'
import Image from './image/index.js'
import Icon from './icon/index.js'
import './styles/index.less'

const version = '1.0'

function install(Vue) {
    let components = [
        Footer,
        Swipe,
        SwipeItem,
        Header,
        Cell,
        Input,
        Button,
        DropDownMenu,
        DropDownMenuItem,
        Loading,
        Overlay,
        Dialog,
        Popup,
        Image,
        Icon,
    ]
    components.forEach(function (item) {
        if (item.install) {
            Vue.use(item)
        } else if (item.name) {
            Vue.component(item.name, item)
        }
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    // 引用vue.js时，调用install
    console.log('install for window.Vue...')
    install(window.Vue)
}

export {
    install,
    version,
    Footer,
    Swipe,
    SwipeItem,
    Header,
    Dialog,
    Cell,
    Input,
    Button,
    Loading,
    Overlay,
    Image,
    Icon,
}
export default {
    install: install,
    version: version,
}
