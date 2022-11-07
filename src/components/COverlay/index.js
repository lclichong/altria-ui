import './index.less'
import { createBem } from '../utils/create-bem'

export default {
    name: 'Overlay',
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
    },
    render() {
        const bem = createBem('c-overlay')
        return <div class={bem(null, { show: this.visible, hide: !this.visible })}></div>
    },
}
