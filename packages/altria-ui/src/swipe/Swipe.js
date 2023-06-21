import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'
import { TouchMixin } from '../mixins/touch'

export default {
    name: createName('swipe'),
    created() {
        this.bem = createBem('alt-swipe')
    },
    mounted() {
        this.init()
        this.bindTouchEvent(this.$refs.swipe)
        window.addEventListener('visibilitychange', this.onVisibilityChange)
        window.addEventListener('resize', this.resize)
    },
    beforeDestroy() {
        this.clear()
        window.removeEventListener('visibilitychange', this.onVisibilityChange)
        window.removeEventListener('resize', this.resize)
    },
    mixins: [TouchMixin],
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
    props: {
        autoplay: {
            // 自动轮播间隔
            type: [Number, String],
        },
        duration: {
            // 动画时长
            type: [Number, String],
            default: 500,
        },
        loop: {
            // 是否开启循环播放
            type: Boolean,
            default: true,
        },
        touchable: {
            type: Boolean,
            default: true,
        },
        showIndicators: {
            type: Boolean,
            default: true,
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
            deltaX: 0,
            deltaY: 0,
        }
    },
    methods: {
        onVisibilityChange() {
            if (document.hidden) {
                this.clear()
            } else {
                this.autoPlay()
            }
        },
        resize() {
            this.init(this.activeIndicator)
        },
        genIndicator() {
            if (this.count > 0 && this.showIndicators) {
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
            const { autoplay, count } = this
            if (autoplay > 0 && count > 1) {
                this.clear()
                this.timer = setTimeout(() => {
                    this.next()
                    this.autoPlay()
                }, autoplay)
            }
        },
        init(active = 0) {
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
            const { loop, count, active, trackSize, minOffset } = this
            const children = this.$children
            if (count <= 1) {
                return
            }

            const targetActive = this.getTargetActive(pace)
            const targetOffset = this.getTargetOffset(targetActive, offset)
            // auto move first and last swipe in loop mode
            if (loop) {
                if (children[0] && targetOffset !== minOffset) {
                    const outRightBound = targetOffset < minOffset
                    children[0].offset = outRightBound ? trackSize : 0
                }

                if (children[count - 1] && targetOffset !== 0) {
                    const outLeftBound = targetOffset > 0
                    children[count - 1].offset = outLeftBound ? -trackSize : 0
                }
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
            const raf = window.requestAnimationFrame || fallback
            let prev = Date.now()
            function fallback(fn) {
                const curr = Date.now()
                const ms = Math.max(0, 16 - (curr - prev))
                const id = setTimeout(fn, ms)
                prev = curr + ms
                return id
            }

            this.correctPosition()
            this.resetTouchStatus()
            raf(() => {
                raf(() => {
                    this.swiping = false
                    this.move({
                        pace: 1,
                        emitChange: true,
                    })
                })
            })
        },
        onTouchStart(event) {
            if (!this.touchable) return
            this.clear()
            this.touchStartTime = Date.now()
            this.touchStart(event)
            this.correctPosition()
        },
        onTouchMove(event) {
            if (!this.touchable || !this.swiping) return
            this.touchMove(event)
            if (this.direction === 'horizontal') {
                event.stopPropagation()
                this.move({ offset: this.deltaX })
            }
        },
        onTouchEnd() {
            if (!this.touchable || !this.swiping) return

            const { size, deltaX } = this
            const duration = Date.now() - this.touchStartTime
            const autoplay = deltaX / duration
            const shouldSwipe = Math.abs(autoplay) > 0.25 || Math.abs(deltaX) > size / 2

            if (shouldSwipe && this.direction === 'horizontal') {
                const offset = this.offsetX

                let pace = 0

                if (this.loop) {
                    pace = offset > 0 ? (deltaX > 0 ? -1 : 1) : 0
                } else {
                    pace = -Math[deltaX > 0 ? 'ceil' : 'floor'](deltaX / size)
                }
                this.move({
                    pace,
                    emitChange: true,
                })
            } else if (deltaX) {
                this.move({ pace: 0 })
            }

            this.swiping = false
            this.autoPlay()
        },
    },
    render() {
        return (
            <div class={this.bem()}>
                <div ref="swipe" class="alt-swipe__wrapper" style={this.trackStyle}>
                    {this.$slots.default}
                </div>
                {this.genIndicator()}
            </div>
        )
    },
}
