import Button from './button'
import Footer from './footer/index.js'
import Swipe from './swipe/index.js'
import SwipeItem from './swipeItem/index.js'
import Header from './header'
import Dialog from './dialog/index.js'
import Cell from './cell'
import Input from './input'
import ButtonLoading from './button/button-loading.vue'
import DropDownMenu from './dropdown-menu/index.js'
import DropDownMenuItem from './dropdown-item/index.js'
import Loading from './loading'
import LoadingCircle from './loading/loading-circle.vue'
import Overlay from './overlay'
import Popup from './popup'
import Image from './image'
import './styles/index.less'
import './icon/iconfont.js'

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
        LoadingCircle,
        ButtonLoading,
        Overlay,
        Dialog,
        Popup,
        Image,
    ]
    components.forEach(function(item) {
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
    LoadingCircle,
    ButtonLoading,
    Overlay,
}
export default {
    install: install,
    version: version,
}
