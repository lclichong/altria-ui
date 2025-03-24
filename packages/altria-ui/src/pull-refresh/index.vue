<template>
    <div ref="container" :class="bem()">
        <div ref="refreshIndicator" :class="bem('indicator')">
            <div>{{ msg }}</div>
        </div>
        <div ref="contentWrapper" :class="bem('content')">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'

export default {
    name: createName('pull-refresh'),
    created() {
        this.bem = createBem('alt-pull-refresh')
    },
    props: {
        value: {
            type: Boolean
        },
        maxDist: {
            type: Number,
            default: 200
        }
    },
    watch: {
        value(val) {
            this.loading = val
        },
        loading(val) {
            this.$emit('input', val)
            if (!val) this.hide()
        }
    },
    mounted() {
        this.content = this.$refs.contentWrapper
        this.container = this.$refs.container
        this.ri = this.$refs.refreshIndicator

        this.touchStartHandler = this._touchStartHandler.bind(this)
        this.touchMoveHandler = this._touchMoveHandler.bind(this)
        this.touchEndHandler = this._touchEndHandler.bind(this)

        const options = { passive: false }
        this.container.addEventListener('touchstart', this.touchStartHandler, options)
        this.container.addEventListener('touchmove', this.touchMoveHandler, options)
        this.container.addEventListener('touchend', this.touchEndHandler)
        this.container.addEventListener('mousedown', this.touchStartHandler)
        this.container.addEventListener('mousemove', this.touchMoveHandler)
        this.container.addEventListener('mouseup', this.touchEndHandler)
    },
    beforeDestroy() {
        const options = { passive: false }
        this.container.removeEventListener('touchstart', this.touchStartHandler, options)
        this.container.removeEventListener('touchmove', this.touchMoveHandler, options)
        this.container.removeEventListener('touchend', this.touchEndHandler)
        this.container.removeEventListener('mousedown', this.touchStartHandler)
        this.container.removeEventListener('mousemove', this.touchMoveHandler)
        this.container.removeEventListener('mouseup', this.touchEndHandler)
    },
    data() {
        return {
            container: null,
            content: null,
            ri: null,
            startX: 0,
            startY: 0,
            pullDist: 0,
            lastCurrentY: 0,
            loading: false,
            msg: '下拉刷新...',
            lockDirection: '',
            msgDist: 80
        }
    },
    methods: {
        _touchStartHandler(e) {
            if (this.loading) return
            if (e.type === 'mousedown') e.preventDefault()
            this.startY = e.touches?.[0]?.clientY ?? e.clientY
            this.startX = e.touches?.[0]?.clientX ?? e.clientX
            this.lockDirection = ''
            this.content.style.transition = 'none'
            this.ri.style.transition = 'none'
        },
        _touchMoveHandler(e) {
            if (this.loading || !this.startY) return

            const currentY = e.touches?.[0]?.clientY ?? e.clientY
            const currentX = e.touches?.[0]?.clientX ?? e.clientX
            const deltaX = currentX - this.startX
            const deltaY = currentY - this.startY

            if (!this.lockDirection) {
                const threshold = 3
                if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
                    this.lockDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'horizontal' : 'vertical'
                }
            }

            if (this.lockDirection === 'horizontal') {
                e.preventDefault()
                return
            }

            this.pullDist = deltaY
            if (this.pullDist <= 0 || this.content.scrollTop > 0) return

            e.preventDefault()
            this._updateLayout()
        },
        _updateLayout() {
            const progress = Math.min(this.pullDist, this.maxDist * 2)
            this.content.style.transform = `translateY(${progress}px)`
            this.ri.style.opacity = Math.min(progress / this.maxDist, 1)
            this.ri.style.transform = `translateY(${progress - 30}px)`
            this._updateIndicator(progress)
        },
        _updateIndicator(dist) {
            this.msg = dist > this.msgDist ? '释放刷新...' : '下拉刷新...'
        },
        _touchEndHandler() {
            if (!this.pullDist || this.loading) return
            // 下拉距离大于文字显示距离具体则触发刷新
            if (this.pullDist > this.msgDist) {
                this._triggerRefresh()
            } else {
                this._resetLayout()
            }
            this.startY = this.pullDist = 0
        },
        _triggerRefresh() {
            this.loading = true
            this.msg = '加载中...'
            this.content.style.transition = 'transform 0.3s'
            this.ri.style.transition = 'transform 0.3s'
            this.content.style.transform = `translateY(${this.ri.offsetHeight}px)`
            this.ri.style.transform = `translateY(${this.ri.offsetHeight / 2}px)`
            this.$emit('onRefresh')
        },
        _resetLayout() {
            this.content.style.transition = 'transform 0.3s'
            this.ri.style.transition = 'transform 0.3s'
            this.content.style.transform = ''
            this.ri.style.transform = 'translateY(-100%)'
            this.ri.style.opacity = '0'
        },
        hide() {
            this._resetLayout()
        }
    }
}
</script>