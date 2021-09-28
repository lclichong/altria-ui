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
            let self = this
            this.$refs.main.style.transitionDuration = '0ms'
            this.$refs.main.style.transform = 'translateX(0px)'
            this.$refs.main.style.width = `${width * 2}px`
            for (let i = 0; i < slide_div.length; i++) {
                slide_div[i].$el.style.width = `${width}px`
            }
            this.$nextTick(() => {
                this.$refs.cs[0].classList.add('i-active')
            })
            let speed = self.count === slide_div.length ? this.speed - this.duration : this.speed
            this.interval = setInterval(function () {
                if (self.count == slide_div.length) {
                    // console.log('重置')
                    self.count = 0
                    self.$refs.main.style.transitionDuration = '0ms'
                    self.$refs.main.style.transform = 'translateX(0px)'
                    slide_div[0].$el.style.width = `${width}px`
                    slide_div[0].$el.style.transform = ''
                    setTimeout(() => {
                        self.count++
                        self.removeClass(self.$refs.cs)
                        self.$refs.cs[self.count].classList.add('i-active')
                        self.$refs.main.style.transitionDuration = `${self.transitionSpeed}ms`
                        self.$refs.main.style.transform = `translateX(-${self.count * width}px)`
                    }, 50)
                } else {
                    // console.log('下一张')
                    ++self.count
                    let csIdx = 0
                    if (self.count <= self.$refs.cs.length - 1) {
                        csIdx = self.count
                    }
                    self.removeClass(self.$refs.cs)
                    self.$refs.cs[csIdx].classList.add('i-active')
                    slide_div[0].$el.style.width = `${width}px`
                    if (self.count > 1) {
                        slide_div[0].$el.style.transform = `translateX(${self.count * width}px)`
                    } else {
                        slide_div[0].$el.style.transform = ''
                    }
                    self.$refs.main.style.transitionDuration = `${self.transitionSpeed}ms`
                    self.$refs.main.style.transform = `translateX(-${self.count * width}px)`
                }
            }, speed)
        },
        move() {
            // 手势轮播
            console.log('move')
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
            })
            this.$refs.main.addEventListener('touchmove', (e) => {
                if (e.touches[0].clientX > this.sx) {
                    console.log('one')
                    if (this.moveNum >= 0) {
                        // this.$refs.main.style.transform = `translateX(0px)`
                    } else {
                        // this.$refs.main.style.transform = `translateX(${this.moveNum}px)`
                        this.moveNum = this.moveNum + 3
                    }
                } else if (e.touches[0].clientX < this.sx) {
                    console.log('two')
                    this.moveNum = this.moveNum - 3
                    // if (this.moveNum + width * 2 > 0) {
                    //     // this.$refs.main.style.transform = `translateX(${this.moveNum}px)`
                    //     this.moveNum = this.moveNum - 3
                    // } else if (this.moveNum + width * 2 <= 0) {
                    //     this.moveNum = -(width * 2)
                    //     // this.$refs.main.style.transform = `translateX(${-(width * 2)}px)`
                    // }
                }
            })
            this.$refs.main.addEventListener('touchend', () => {
                this.count++
                let idx = Math.abs(this.moveNum) / width
                console.log(Number.parseInt(idx))
                if (Number.parseInt(idx) == this.slideLength) {
                    this.$refs.main.style.transitionDuration = '0ms'
                    this.$refs.main.style.transform = 'translateX(0px)'
                    slide_div[0].$el.style.width = `${width}px`
                    slide_div[0].$el.style.transform = ''
                    setTimeout(() => {
                        this.$refs.main.style.transitionDuration = `${this.transitionSpeed}ms`
                        this.$refs.main.style.transform = `translateX(-${width}px)`
                        this.moveNum = width
                        console.log(this.moveNum)
                    }, 50)
                } else {
                    if (Number.parseInt(idx) == 0 && this.count > 1) {
                        idx = 1
                    }
                    if (Number.parseInt(idx) + 1 > 1) {
                        slide_div[0].$el.style.transform = `translateX(${(Number.parseInt(idx) + 1) * width}px)`
                    } else {
                        slide_div[0].$el.style.transform = ''
                    }
                    this.$refs.main.style.transitionDuration = `${this.transitionSpeed}ms`
                    this.$refs.main.style.transform = `translateX(-${(Number.parseInt(idx) + 1) * width}px)`
                    this.moveNum = -((Number.parseInt(idx) + 1) * width)
                }
            })
        },
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>
