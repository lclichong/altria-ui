import './index.less'
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'

export default {
    name: createName('swipe'),
    created() {
        this.transitionSpeed = this.duration
        this.bem = createBem('alt-swipe')
    },
    mounted() {
        this.computedWidth = this.$el.offsetWidth
        this.count = this.$children.length
        this.$nextTick(() => {
            this.genIndicator()
        })
    },
    destroyed() {
        // 销毁定时任务
        window.clearInterval(this.interval)
    },
    computed: {
        size() {
            return this.computedWidth
        },
        trackStyle() {
            const style = {
                transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
                transform: `translateX(${this.offset}px)`,
                width: this.trackSize + 'px',
            }
            return style
        },
        trackSize() {
            return this.count * this.size
        },
    },
    props: {
        speed: {
            // 自动轮播间隔
            type: Number,
            default: 5000,
        },
        duration: {
            // 动画时长
            type: Number,
            default: 500,
        },
        loop: {
            // 是否开启循环播放
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            childLens: 0,
            indicators: null,
            offset: 0,
            swiping: false,
            computedWidth: 0,
            count: 0,
        }
    },
    methods: {
        genIndicator() {
            this.childLens = this.$children.length
            if (this.childLens > 0) {
                let indicators = []
                for (let i = 0; i < this.childLens; i++) {
                    let indicator = ''
                    if (i == 0) {
                        indicator = <i key={i} class="i--active"></i>
                    } else {
                        indicator = <i key={i}></i>
                    }
                    indicators.push(indicator)
                }
                let node = <div class={this.bem('indicator')}>{...indicators}</div>
                this.indicators = node
            }
        },
        autoplay() {
            let w = window.innerWidth
            this.trackStyle = {
                width: w * this.childLens + 'px',
                transform: 'translateX(0px)',
                transitionDuration: '0ms',
            }
            this.next(0)
        },
        next(num) {
            setInterval(() => {
                let w = window.innerWidth
                if (num === this.childLens - 1) {
                    let translateX = `${window.innerWidth * this.childLens}px`
                    this.$children[0].$el.style.transform = `translateX(${translateX})`
                    num += 1
                } else if (num === this.childLens) {
                    num = 1
                    this.trackStyle = {
                        transform: `translateX(0px)`,
                        transitionDuration: '0ms',
                    }
                    this.$children[0].$el.style.transform = ''
                } else {
                    num += 1
                }
                let translateX = `-${window.innerWidth * num}px`
                this.trackStyle = {
                    width: w * this.childLens + 'px',
                    transform: `translateX(${translateX})`,
                    transitionDuration: '500ms',
                }
            }, this.speed)
        },
    },
    render() {
        return (
            <div class={this.bem()}>
                <div class="alt-main-slide" style={this.trackStyle}>
                    {this.$slots.default}
                </div>
                {this.indicators}
            </div>
        )
    },
}
