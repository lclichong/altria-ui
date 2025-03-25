<template>
    <div :class="bem()">
        <div :class="bem('wrapper')">
            <template v-if="getLoadNum > 0">
                <i v-for="i in getLoadNum" :key="i" :class="setLoadClasses" :style="setLoadStyles"></i>
            </template>
            <template v-else>
                <alt-loading-circle :class="setLoadClasses" :size="size" :style="setLoadStyles"></alt-loading-circle>
                <span :class="bem('text')" :style="setTextStyles">{{ this.loadText }}</span>
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
            let setLoadClasses = this.bem(this.loadType, { size: this.size })
            return setLoadClasses
        },
        setLoadStyles() {
            let styles = {}
            if (this.size && !['mini', 'small', 'medium', 'large'].includes(this.size)) {
                styles.width = this.size + 'px'
                styles.height = this.size + 'px'
                styles.fontSize = this.size + 'px'
            }
            if (this.color) {
                const { isArray } = Array
                const beArrColor = isArray(this.color)
                if (this.loadType === 'circle') {
                    styles.color = beArrColor ? '' : this.color
                } else {
                    styles.background = beArrColor ? `linear-gradient(${this.color.join()})` : this.color
                }
            }
            return styles
        },
        getLoadNum() {
            if (this.loadType === 'circle') {
                return 0
            } else {
                return 3
            }
        },
        setTextStyles() {
            let styles = {}
            if (this.color) {
                styles.color = this.color
            }
            if (this.textSize && !this.textSize.includes('px')) {
                styles.fontSize = this.textSize + 'px'
                return styles
            }
            styles.fontSize = this.textSize
            return styles
        }
    },
    props: {
        size: {
            type: String,
            default: 'medium'
        },
        color: {
            type: [String, Array]
        },
        loadType: {
            type: String,
            default: 'default'
        },
        loadText: {
            type: String
        },
        textSize: {
            type: String
        }
    }
}
</script>