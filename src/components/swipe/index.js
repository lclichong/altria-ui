import './index.less'
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'

export default {
    name: createName('swipe'),
    created() {
        this.bem = createBem('alt-swipe')
    },
    mounted() {
        this.init()
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
        maxCount() {
            return Math.ceil(Math.abs(this.minOffset) / this.size)
        },
        minOffset() {
            return this.rect.width - this.size * this.count
        },
        activeIndicator() {
            return (this.active + this.count) % this.count
        },
    },
    watch: {
        loop(val) {
            if (val) {
                this.autoPlay()
            } else {
                this.clear()
            }
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
        },
        initialSwipe: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            offset: 0,
            swiping: false,
            computedWidth: 0,
            count: 0,
            active: 0,
            rect: null,
        }
    },
    methods: {
        genIndicator() {
            if (this.count > 0) {
                let indicators = []
                for (let i = 0; i < this.count; i++) {
                    let indicator = <i class={i === this.activeIndicator ? 'alt-swipe__indicator--active' : ''}></i>
                    indicators.push(indicator)
                }
                let node = <div class={this.bem('indicators')}>{...indicators}</div>
                return node
            }
        },
        autoPlay() {
            const { loop, speed, count } = this
            if (loop && speed > 0 && count > 1) {
                this.clear()
                this.timer = setTimeout(() => {
                    this.next()
                    this.autoPlay()
                }, speed)
            }
        },
        init(active = +this.initialSwipe) {
            if (!this.$el) {
                return
            }
            clearTimeout(this.timer)
            const rect = {
                width: this.$el.offsetWidth,
                height: this.$el.offsetHeight,
            }
            this.swiping = true
            this.rect = rect
            this.count = this.$children.length
            this.computedWidth = this.$el.offsetWidth
            this.active = active
            this.offset = this.getTargetOffset(active)
            this.$children.forEach((swipe) => {
                swipe.offset = 0
            })
            this.autoPlay()
        },
        getTargetOffset(targetActive, offset = 0) {
            let currentPosition = targetActive * this.size
            if (!this.loop) {
                currentPosition = Math.min(currentPosition, -this.minOffset)
            }

            let targetOffset = offset - currentPosition
            if (!this.loop) {
                targetOffset = this.range(targetOffset, this.minOffset, 0)
            }

            return targetOffset
        },
        getTargetActive(pace) {
            if (pace) {
                if (this.loop) {
                    return this.range(this.active + pace, -1, this.count)
                }
                return this.range(this.active + pace, 0, this.maxCount)
                // return this.active + pace
            }
            return this.active
        },
        range(num, min, max) {
            return Math.min(Math.max(num, min), max)
        },
        clear() {
            clearTimeout(this.timer)
        },
        move({ pace = 0, offset = 0, emitChange }) {
            const { loop, count, active, trackSize } = this
            const children = this.$children
            if (count <= 1) {
                return
            }

            const targetActive = this.getTargetActive(pace)
            const targetOffset = this.getTargetOffset(targetActive, offset)
            // auto move first and last swipe in loop mode
            if (loop) {
                children[0].offset = targetActive === this.count ? trackSize : 0
                // if (children[0] && targetOffset !== minOffset) {
                //     const outRightBound = targetOffset < minOffset
                //     children[0].offset = outRightBound ? trackSize : 0
                // }

                // if (children[count - 1] && targetOffset !== 0) {
                //     const outLeftBound = targetOffset > 0
                //     children[count - 1].offset = outLeftBound ? -trackSize : 0
                // }
            }

            this.active = targetActive
            this.offset = targetOffset

            if (emitChange && targetActive !== active) {
                this.$emit('change', this.activeIndicator)
            }
        },
        correctPosition() {
            // transition-duration: 0ms;
            this.swiping = true
            if (this.active <= -1) {
                this.move({ pace: this.count })
            }
            if (this.active >= this.count) {
                // this.active = 0
                this.move({ pace: -this.count })
            }
        },
        next() {
            const ra = window.requestAnimationFrame || fallback
            let prev = Date.now()
            function fallback(fn) {
                const curr = Date.now()
                const ms = Math.max(0, 16 - (curr - prev))
                const id = setTimeout(fn, ms)
                prev = curr + ms
                return id
            }

            this.correctPosition()
            ra(() => {
                ra(() => {
                    this.swiping = false
                    this.move({
                        pace: 1,
                        emitChange: true,
                    })
                })
            })
        },
    },
    render() {
        return (
            <div class={this.bem()}>
                <div class="alt-swipe__wrapper" style={this.trackStyle}>
                    {this.$slots.default}
                </div>
                {this.genIndicator()}
            </div>
        )
    },
}
