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
        if (this.visible) {
            return (
                <Transition name="overlay-fade">
                    <div class={bem(null)}></div>
                </Transition>
            )
        }
    },
}
