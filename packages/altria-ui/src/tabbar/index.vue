<template>
    <div :class="bem()">
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
    watch: {
        value: {
            handler(val) {
                this.$nextTick(() => {
                    if (Number.isInteger(val)) {
                        for (let child of this.$children) {
                            if (child.active) {
                                child.active = false
                            }
                        }
                        if (val >= this.$children.length) {
                            this.$children[this.$children.length - 1].active = true
                        } else if (val < 0) {
                            this.$children[0].active = true
                        } else {
                            this.$children[val].active = true
                        }
                    } else {
                        for (let child of this.$children) {
                            if (child.name === val) {
                                child.active = true
                            } else {
                                child.active = false
                            }
                        }
                    }
                })
            },
            immediate: true
        }
    },
    props: {
        value: {
            type: [String, Number]
        }
    },
    data() {
        return {}
    },
    methods: {}
}
</script>

<style lang="less">
@import 'index.less';
</style>