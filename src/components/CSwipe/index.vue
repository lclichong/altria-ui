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
    created () {
        this.transitionSpeed = this.tSpeed
    },
    mounted () {
        this.initSwipe()
    },
    destroyed () {
        // 销毁定时任务
        window.clearInterval(this.interval)
    },
    props: {
        speed: {
            type: Number,
            default: 5000
        },
        tSpeed: {
            type: Number,
            default: 500
        }
    },
    data: function () {
        return {
            slideLength: 0,
            transitionSpeed: 0,
            interval: ''
        }
    },
    methods: {
        removeClass (array) {
            array.forEach(e => {
                if (e != undefined && e.classList != undefined) {
                    e.classList.remove('i-active')
                }
            })
        },
        initSwipe () {
            let slide_div = this.$children
            this.slideLength = slide_div.length
            let width = window.innerWidth
            let self = this
            let count = 0
            this.$refs.main.style.transitionDuration = '0ms'
            this.$refs.main.style.transform = 'translateX(0px)'
            this.$refs.main.style.width = `${width * 2}px`
            for (let i = 0; i < slide_div.length; i++) {
                slide_div[i].$el.style.width = `${width}px`
            }
            this.$nextTick(() => {
                this.$refs.cs[0].classList.add('i-active')
            })
            this.interval = setInterval(function () {
                // console.log('setInterval...')
                if (count == slide_div.length) {
                    // console.log('重置')
                    count = 0
                    self.$refs.main.style.transitionDuration = '0ms'
                    self.$refs.main.style.transform = 'translateX(0px)'
                    slide_div[0].$el.style.width = `${width}px`
                    slide_div[0].$el.style.transform = ''

                    setTimeout(() => {
                        count++
                        // console.log(count * width)
                        self.removeClass(self.$refs.cs)
                        self.$refs.cs[count].classList.add('i-active')
                        self.$refs.main.style.transitionDuration = `${self.transitionSpeed}ms`
                        self.$refs.main.style.transform = `translateX(-${(count) * width}px)`
                    }, 0)
                } else {
                    // console.log('下一张')
                    ++count
                    // console.log(count * width)

                    let csIdx = 0
                    if (count <= self.$refs.cs.length - 1) {
                        csIdx = count
                    }
                    self.removeClass(self.$refs.cs)
                    self.$refs.cs[csIdx].classList.add('i-active')

                    slide_div[0].$el.style.width = `${width}px`
                    if (count > 1) {
                        slide_div[0].$el.style.transform = `translateX(${count * width}px)`
                    } else {
                        slide_div[0].$el.style.transform = ''
                    }
                    self.$refs.main.style.transitionDuration = `${self.transitionSpeed}ms`
                    self.$refs.main.style.transform = `translateX(-${count * width}px)`
                }
            }, this.speed)
        }
    }
}
</script>

<style lang="less">
@import 'index.less';
</style>
