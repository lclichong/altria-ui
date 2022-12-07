import Button from './components/button'
import Footer from './components/footer/index.js'
import Swipe from './components/swipe/index.js'
import SwipeItem from './components/swipeItem/index.js'
import Header from './components/header'
import Dialog from './components/dialog/index.js'
import Cell from './components/cell'
import Input from './components/input'
import ButtonLoading from './components/button/button-loading.vue'
import DropDownMenu from './components/dropdown-menu/index.js'
import DropDownMenuItem from './components/dropdown-item/index.js'
import Loading from './components/loading'
import LoadingCircle from './components/loading/loading-circle.vue'
import Overlay from './components/overlay'
import Popup from './components/popup'
import Image from './components/image'
import './components/index.less'
import './icon/iconfont'

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
