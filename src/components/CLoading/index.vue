<template>
    <div class="c-loading">
        <div :class="bem('wrapper')">
            <template v-if="getLoadNum > 0">
                <i v-for="i in getLoadNum" :key="i" :class="setLoadClasses" :style="setLoadStyles"></i>
            </template>
            <template v-else>
                <LoadingCircle :class="setLoadClasses" :style="setLoadStyles"></LoadingCircle>
            </template>
        </div>
    </div>
</template>

<script>
import { createBem } from '../utils/create-bem.js'

export default {
    name: 'Loading',
    created() {
        this.bem = createBem('c-loading')
    },
    computed: {
        setLoadClasses() {
            let setLoadClasses = this.bem(this.loadType, { size: this.size }) + ` ${this.type}`
            return setLoadClasses
        },
        setLoadStyles() {
            if (!this.color) {
                return
            }
            const { isArray } = Array
            const beArrColor = isArray(this.color)
            if (this.loadType === 'circle') {
                return {
                    color: beArrColor ? '' : this.color,
                }
            }
            return {
                background: beArrColor ? `linear-gradient(${this.color.join()})` : this.color,
            }
        },
        getLoadNum() {
            if (this.loadType === 'circle') {
                return 0
            } else {
                return 3
            }
        },
    },
    props: {
        size: {
            type: String,
            default: 'medium',
        },
        type: {
            type: String,
            default: 'default',
        },
        color: {
            default: '',
        },
        loadType: {
            type: String,
            default: 'default',
        },
    },
    data() {
        return {}
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>