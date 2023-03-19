<template>
    <div :class="bem()">
        <div :class="bem('wrapper')">
            <template v-if="getLoadNum > 0">
                <i v-for="i in getLoadNum" :key="i" :class="setLoadClasses" :style="setLoadStyles"></i>
            </template>
            <template v-else>
                <alt-loading-circle :class="setLoadClasses" :style="setLoadStyles"></alt-loading-circle>
                <span :class="bem('text')" :style="{ color: this.color }">{{ this.loadText }}</span>
            </template>
        </div>
    </div>
</template>

<script>
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'
import AltLoadingCircle from './loading-circle.vue'

export default {
    name: createName('loading'),
    components: {
        AltLoadingCircle
    },
    created() {
        this.bem = createBem('alt-loading')
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
                    color: beArrColor ? '' : this.color
                }
            }
            return {
                background: beArrColor ? `linear-gradient(${this.color.join()})` : this.color
            }
        },
        getLoadNum() {
            if (this.loadType === 'circle') {
                return 0
            } else {
                return 3
            }
        }
    },
    props: {
        size: {
            type: String,
            default: 'medium'
        },
        type: {
            type: String,
            default: 'default'
        },
        color: {
            default: ''
        },
        loadType: {
            type: String,
            default: 'default'
        },
        loadText: {
            type: String
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="less">
@import 'index.less';
</style>