<template>
    <div @click="handleClick" :class="setClasses" :style="{ color: setColor }">
        <div :class="bem('icon')">
            <alt-icon :name="icon"></alt-icon>
            <div v-if="dot" :class="bem('icon__dot')"></div>
        </div>
        <div v-if="badge" :class="bem('badge')">{{ badge }}</div>
        <slot></slot>
    </div>
</template>

<script>
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'
import AltIcon from '../icon'

export default {
    name: createName('tabbar-item'),
    components: {
        AltIcon
    },
    created() {
        this.bem = createBem('alt-tabbar-item')
    },
    computed: {
        setClasses() {
            const bem = createBem('alt-tabbar-item')
            return bem(null, { active: this.active })
        },
        setColor() {
            const activeColor = this.$parent.activeColor
            return this.active ? activeColor : ''
        }
    },
    props: {
        name: {
            type: String
        },
        icon: {
            type: String
        },
        dot: {
            type: Boolean,
            default: false
        },
        badge: {
            type: [String, Number]
        }
    },
    data() {
        return {
            active: false
        }
    },
    methods: {
        handleClick(event) {
            const uid = this._uid
            let index = ''
            for (let i = 0; i < this.$parent.$children.length; i++) {
                if (this.$parent.$children[i]._uid === uid) {
                    if (this.name) {
                        index = this.name
                    } else {
                        index = i
                    }
                }
            }
            this.$parent.$emit('input', index)
            this.$emit('click', index, event)
        }
    }
}
</script>