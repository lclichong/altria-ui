import './index.less'
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
    },
    beforeDestroy() {
        this.clear()
        window.removeEventListener('visibilitychange', this.onVisibilityChange)
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
            this.offset = 0
            this.$children.forEach((swipe) => {
                swipe.offset = 0
            })
            this.autoPlay()
        },
        clear() {
            clearTimeout(this.timer)
        },
        move({ pace = 0, emitChange }) {
            const { loop, count, active, trackSize, size } = this
            const children = this.$children
            if (count <= 1) {
                return
            }
            let targetActive = 0
            if (loop) {
                targetActive = active + pace > count ? 0 : active + pace
                children[0].offset = targetActive === count || active == count - 1 ? trackSize : 0
            } else {
                if (active + pace > count - 1) {
                    targetActive = count - 1
                } else if (active + pace < 0) {
                    targetActive = 0
                } else {
                    targetActive = active + pace
                }
            }
            let targetOffset = 0 - targetActive * size
            if (loop && targetOffset < 0) {
                // left
                children[count - 1].offset = 0
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
                // this.active = 3
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
            this.resetTouchStatus()
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
                let { active, deltaX, size, loop, count, trackSize } = this
                let currentPosition = active * size
                let targetOffset = deltaX - currentPosition
                const children = this.$children
                if (deltaX < 0) {
                    // right
                    if (loop) {
                        this.offset = targetOffset
                        if (active === count - 1) {
                            children[0].offset = trackSize
                        } else {
                            children[0].offset = 0
                        }
                    } else {
                        if (active != count - 1) {
                            this.offset = targetOffset
                        }
                    }
                } else {
                    // left
                    if (loop) {
                        this.offset = targetOffset
                        children[0].offset = 0
                        if (active === 0) {
                            children[count - 1].offset = 0 - trackSize
                        } else {
                            children[count - 1].offset = 0
                        }
                    } else {
                        if (active != 0) {
                            this.offset = targetOffset
                        }
                    }
                }
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
