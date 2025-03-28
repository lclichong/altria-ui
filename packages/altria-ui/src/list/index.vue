<template>
    <div ref="list" :class="bem()">
        <slot></slot>
        <div ref="loading" :class="bem('loading')">
            <alt-loading
                v-show="value && !finished"
                color="#aaa"
                load-type="circle"
                size="24"
                textSize="14"
                :load-text="text"
            />
            <div v-show="finished">{{ text }}</div>
        </div>
    </div>
</template>

<script>
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'
import AltLoading from '../loading'

export default {
    name: createName('list'),
    components: {
        AltLoading
    },
    created() {
        this.bem = createBem('alt-list')
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        finished: {
            type: Boolean,
            default: false
        },
        loadingText: {
            type: String,
            default: '加载中.....'
        },
        finishedText: {
            type: String,
            default: '没有更多了'
        },
        threshold: {
            type: Number,
            default: 0.1
        }
    },
    data() {
        return {
            text: this.loadingText,
            intersectionObserver: null,
            mutationObserver: null
        }
    },
    watch: {
        finished(val) {
            if (val) {
                this.text = this.finishedText
                // 数据加载完毕时，断开所有监听
                this.disconnectObservers()
            } else {
                this.text = this.loadingText
            }
        }
    },
    mounted() {
        this.initObservers()
    },
    beforeDestroy() {
        // 组件销毁时断开监听
        this.disconnectObservers()
    },
    methods: {
        initObservers() {
            const list = this.$refs.list
            const loading = this.$refs.loading

            // 监听loading元素是否可见。当loading元素可见且未完成时(finished = false)，触发load事件。
            this.setupIntersectionObserver(loading)

            // 监听整个List元素内子元素的变化。
            // 父组件页面加载完毕异步加载数据时，需要监听List元素内子元素的变化。
            this.mutationObserver = new MutationObserver((mutationsList) => {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        // 如果有新增的子元素，调用handleChildListChange函数
                        this.handleChildListChange(list, loading)
                        break
                    }
                }
            })
            this.mutationObserver.observe(list, { childList: true })
        },
        handleChildListChange(list, loading) {
            // 判断List元素是否有滚动条，有则表示内容已超出可视区域，反之则数据不够展示整个页面，需要执行load事件
            const hasScroll = this.hasVerticalScrollbar(list)
            // 优化性能如果有intersectionObserver对象了，则不再调用保证intersectionObserver只有一个。
            if (hasScroll) {
                // 如果有滚动条则监听loading元素是否可见
                this.setupIntersectionObserver(loading)
            } else {
                // 如果元素没有滚动条，则检查是否需要加载，满足条件则触发load事件
                this.checkAutoLoad()
            }
        },
        setupIntersectionObserver(element) {
            if (this.finished) return

            if (this.intersectionObserver) {
                this.intersectionObserver.disconnect()
            }

            const onIntersect = (entries) => {
                const entry = entries[0]
                if (entry.isIntersecting && !this.finished) {
                    this.triggerLoad()
                }
            }

            // 监听元素是否可见
            this.intersectionObserver = new IntersectionObserver(onIntersect, {
                root: this.$refs.list,
                threshold: this.threshold
            })
            this.intersectionObserver.observe(element)
        },
        checkAutoLoad() {
            // 检查是否需要加载
            if (!this.finished && !this.value && !this.hasVerticalScrollbar(this.$refs.list)) {
                this.triggerLoad()
            }
        },
        triggerLoad() {
            // 触发load事件
            this.$emit('load')
            // 触发input事件更新loading状态，对应父组件v-model
            this.$emit('input', true)
        },
        hasVerticalScrollbar(element) {
            // 判断元素具有垂直滚动条
            return element.scrollHeight > element.clientHeight
        },
        disconnectObservers() {
            // 断开监听
            if (this.intersectionObserver) {
                this.intersectionObserver.disconnect()
                this.intersectionObserver = null
            }
            if (this.mutationObserver) {
                this.mutationObserver.disconnect()
                this.mutationObserver = null
            }
        }
    }
}
</script>