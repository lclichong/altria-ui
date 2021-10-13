<template>
    <div class="cs-swipe">
        <div ref="main" class="cs-main-slide">
            <slot></slot>
        </div>
        <div class="cs-slide-round">
            <i ref="cs" v-for="(s, key) in slideLength" :key="key"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Swipe',
    created() {
        this.transitionSpeed = this.duration
    },
    destroyed() {
        // 销毁定时任务
        window.clearInterval(this.interval)
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
    data: function () {
        return {
            slideLength: 0,
            transitionSpeed: 0,
            interval: '',
            childMounted: 0,
            count: 0,
            sx: 0,
            moveNum: 0,
            isMove: false,
            direction: '',
        }
    },
    methods: {
        removeClass(array) {
            array.forEach((e) => {
                if (e != undefined && e.classList != undefined) {
                    e.classList.remove('i-active')
                }
            })
        },
        autoplay() {
            // 自动轮播
            let slide_div = this.$children
            this.slideLength = slide_div.length
            let width = window.innerWidth
            this.$refs.main.style.transitionDuration = '0ms'
            this.$refs.main.style.transform = 'translateX(0px)'
            this.$refs.main.style.width = `${width * 2}px`
            for (let i = 0; i < slide_div.length; i++) {
                slide_div[i].$el.style.width = `${width}px`
            }
            this.$nextTick(() => {
                this.$refs.cs[0].classList.add('i-active')
            })
            let speed = this.count === slide_div.length ? this.speed - this.duration : this.speed
            this.interval = setInterval(() => {
                if (this.count == slide_div.length) {
                    // 重置
                    this.count = 0
                    this.$refs.main.style.transitionDuration = '0ms'
                    this.$refs.main.style.transform = 'translateX(0px)'
                    slide_div[0].$el.style.width = `${width}px`
                    slide_div[0].$el.style.transform = ''
                    setTimeout(() => {
                        this.count++
                        this.removeClass(this.$refs.cs)
                        this.$refs.cs[this.count].classList.add('i-active')
                        this.$refs.main.style.transitionDuration = `${this.transitionSpeed}ms`
                        this.$refs.main.style.transform = `translateX(-${this.count * width}px)`
                        this.moveNum = -(this.count * width)
                    }, 50)
                } else {
                    // 下一张
                    ++this.count
                    let csIdx = 0
                    if (this.count <= this.$refs.cs.length - 1) {
                        csIdx = this.count
                    }
                    this.removeClass(this.$refs.cs)
                    this.$refs.cs[csIdx].classList.add('i-active')
                    slide_div[0].$el.style.width = `${width}px`
                    if (this.count > 1) {
                        slide_div[0].$el.style.transform = `translateX(${this.count * width}px)`
                    } else {
                        slide_div[0].$el.style.transform = ''
                    }
                    this.$refs.main.style.transitionDuration = `${this.transitionSpeed}ms`
                    this.$refs.main.style.transform = `translateX(-${this.count * width}px)`
                    this.moveNum = -(this.count * width)
                }
            }, speed)
        },
        move() {
            // 手势轮播
            let slide_div = this.$children
            this.slideLength = slide_div.length
            let width = window.innerWidth
            this.$refs.main.style.transform = 'translateX(0px)'
            this.$refs.main.style.width = `${width * 2}px`
            for (let i = 0; i < slide_div.length; i++) {
                slide_div[i].$el.style.width = `${width}px`
            }
            this.$nextTick(() => {
                this.$refs.cs[0].classList.add('i-active')
            })
            this.$refs.main.addEventListener('touchstart', (e) => {
                // sx 用于判断拖拽方向
                this.$refs.main.style.transitionDuration = '0ms'
                this.sx = e.touches[0].clientX
                this.isMove = false
            })
            this.$refs.main.addEventListener('touchmove', (e) => {
                this.isMove = true
                if (e.touches[0].clientX > this.sx) {
                    // 向左
                    if (this.count == 0) {
                        slide_div[this.slideLength - 1].$el.style.transform = `translateX(-${
                            this.slideLength * width
                        }px)`
                    }
                    this.direction = 'left'
                    this.moveNum = this.moveNum + 3
                    this.$refs.main.style.transform = `translateX(${this.moveNum}px)`
                } else if (e.touches[0].clientX < this.sx) {
                    // 向右
                    if (this.count == this.slideLength - 1) {
                        slide_div[0].$el.style.transform = `translateX(${this.slideLength * width}px)`
                    }
                    if (this.count == this.slideLength) {
                        slide_div[1].$el.style.transform = `translateX(${this.slideLength * width}px)`
                    }
                    this.direction = 'right'
                    this.moveNum = this.moveNum - 3
                    this.$refs.main.style.transform = `translateX(${this.moveNum}px)`
                }
            })
            this.$refs.main.addEventListener('touchend', () => {
                if (!this.isMove) {
                    return
                }
                if (this.direction === 'left') {
                    this.count--
                    if (this.count < 0 || this.count == this.slideLength - 1) {
                        slide_div[this.slideLength - 1].$el.style.removeProperty('transform')
                        this.$refs.main.style.transitionDuration = '0ms'
                        this.$refs.main.style.transform = `translateX(-${this.slideLength * width}px)`
                        slide_div[0].$el.style.width = `${width}px`
                        slide_div[0].$el.style.transform = `translateX(${this.slideLength * width}px)`
                        setTimeout(() => {
                            this.count = this.slideLength - 1
                            this.removeClass(this.$refs.cs)
                            this.$refs.cs[this.slideLength - 1].classList.add('i-active')
                            this.$refs.main.style.transitionDuration = `${this.transitionSpeed}ms`
                            this.$refs.main.style.transform = `translateX(-${(this.slideLength - 1) * width}px)`
                            this.moveNum = -((this.slideLength - 1) * width)
                        }, 50)
                    } else {
                        let csIdx = 0
                        if (this.count <= this.$refs.cs.length - 1) {
                            csIdx = this.count
                        }
                        this.removeClass(this.$refs.cs)
                        this.$refs.cs[csIdx].classList.add('i-active')
                        slide_div[0].$el.style.width = `${width}px`
                        if (this.count > 1) {
                            slide_div[0].$el.style.transform = `translateX(${this.count * width}px)`
                        } else {
                            slide_div[0].$el.style.transform = ''
                        }
                        this.$refs.main.style.transitionDuration = `${this.transitionSpeed}ms`
                        this.$refs.main.style.transform = `translateX(-${this.count * width}px)`
                        this.moveNum = -(this.count * width)
                    }
                } else {
                    if (this.count == this.slideLength) {
                        slide_div[1].$el.style.removeProperty('transform')
                        this.count = 0
                        this.$refs.main.style.transitionDuration = '0ms'
                        this.$refs.main.style.transform = 'translateX(0px)'
                        slide_div[0].$el.style.width = `${width}px`
                        slide_div[0].$el.style.transform = ''
                        setTimeout(() => {
                            this.count++
                            this.removeClass(this.$refs.cs)
                            this.$refs.cs[this.count].classList.add('i-active')
                            this.$refs.main.style.transitionDuration = `${this.transitionSpeed}ms`
                            this.$refs.main.style.transform = `translateX(-${this.count * width}px)`
                            this.moveNum = -(this.count * width)
                        }, 50)
                    } else {
                        this.count++
                        let csIdx = 0
                        if (this.count <= this.$refs.cs.length - 1) {
                            csIdx = this.count
                        }
                        this.removeClass(this.$refs.cs)
                        this.$refs.cs[csIdx].classList.add('i-active')
                        slide_div[0].$el.style.width = `${width}px`
                        if (this.count > 1) {
                            slide_div[0].$el.style.transform = `translateX(${this.count * width}px)`
                        } else {
                            slide_div[0].$el.style.transform = ''
                        }
                        this.$refs.main.style.transitionDuration = `${this.transitionSpeed}ms`
                        this.$refs.main.style.transform = `translateX(-${this.count * width}px)`
                        this.moveNum = -(this.count * width)
                    }
                }
            })
        },
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>
