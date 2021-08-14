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
        this.transitionSpeed = this.tSpeed
    },
    mounted() {},
    destroyed() {
        // 销毁定时任务
        window.clearInterval(this.interval)
    },
    props: {
        speed: {
            type: Number,
            default: 5000,
        },
        tSpeed: {
            type: Number,
            default: 500,
        },
    },
    data: function () {
        return {
            slideLength: 0,
            transitionSpeed: 0,
            interval: '',
            childMounted: 0,
            count: 0,
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
        initSwipe() {
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
            let speed = self.count === slide_div.length ? this.speed - this.tSpeed : this.speed
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
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>
