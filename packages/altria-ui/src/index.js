import Button from './button/index.js'
import Cell from './cell/index.js'
import Dialog from './dialog/index.js'
import DropDownMenu from './dropdownMenu/index.js'
import DropDownMenuItem from './dropdownItem/index.js'
import Footer from './footer/index.js'
import Header from './header/index.js'
import Icon from './icon/index.js'
import Image from './image/index.js'
import Input from './input/index.js'
import Loading from './loading/index.js'
import Overlay from './overlay/index.js'
import Popup from './popup/index.js'
import Swipe from './swipe/index.js'
import SwipeItem from './swipeItem/index.js'

import './styles/index.less'

const version = '1.0'

function install(Vue) {
    let components = [
        Cell,
        Dialog,
        DropDownMenu,
        DropDownMenuItem,
        Footer,
        Header,
        Icon,
        Image,
        Input,
        Loading,
        Overlay,
        Popup,
        Swipe,
        SwipeItem,
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
    Button,
    Cell,
    Dialog,
    DropDownMenu,
    DropDownMenuItem,
    Footer,
    Header,
    Icon,
    Image,
    Input,
    Loading,
    Overlay,
    Popup,
    Swipe,
    SwipeItem,
}

export default {
    install: install,
    version: version,
}
