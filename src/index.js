import Footer from './components/CFooter/index.js'
import Swipe from './components/CSwipe'
import SwipeItem from './components/CSwipeItem'
import Header from './components/CHeader'
import Dialog from './components/CDialog/index.js'
import Cell from './components/CCell'
import Input from './components/CInput'
import Button from './components/CButton'
import ButtonLoading from './components/CButton/button-loading.vue'
import DropDownMenu from './components/CDropDownMenu'
import DropDownMenuItem from './components/CDropDownMenuItem/index.js'
import Loading from './components/CLoading'
import LoadingCircle from './components/CLoading/loading-circle.vue'
import Overlay from './components/COverlay'
import Popup from './components/CPopup'
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
