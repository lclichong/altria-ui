<template>
    <div :class="bem(null, { fixed: true })">
        <slot></slot>
    </div>
</template>

<script>
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'

export default {
    name: createName('tabbar'),
    created() {
        this.bem = createBem('alt-tabbar')
    },
    mounted() {
        this.changeActive(this.value)
    },
    watch: {
        value: {
            handler(val) {
                this.$nextTick(() => {
                    const index = this.changeActive(val)
                    this.$emit('change', index)
                })
            }
        }
    },
    props: {
        value: {
            type: [String, Number]
        },
        activeColor: {
            type: String
        }
    },
    methods: {
        changeActive(val) {
            let index = ''
            if (Number.isInteger(val)) {
                for (let child of this.$children) {
                    if (child.active) {
                        child.active = false
                    }
                }
                if (val >= this.$children.length) {
                    index = this.$children.length - 1
                    this.$children[this.$children.length - 1].active = true
                } else if (val < 0) {
                    index = 0
                    this.$children[0].active = true
                } else {
                    index = val
                    this.$children[val].active = true
                }
            } else {
                this.$children.forEach((child) => {
                    if (child.name === val) {
                        index = child.name
                        child.active = true
                    } else {
                        child.active = false
                    }
                })
            }
            return index
        }
    }
}
</script>