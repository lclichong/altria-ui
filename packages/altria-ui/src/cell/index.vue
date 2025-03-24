<template>
    <div @click="handleClick" :class="bem()">
        <div v-if="title" :class="bem('title')">{{ title }}</div>
        <div v-if="value" :class="bem('value')">{{ value }}</div>
        <div v-if="$slots.title" :class="bem('title')">
            <slot name="title"></slot>
        </div>
        <div v-if="$slots.value" :class="bem('value')">
            <slot name="value"></slot>
        </div>
    </div>
</template>

<script>
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'

export default {
    name: createName('cell'),
    created() {
        this.bem = createBem('alt-cell')
    },
    props: {
        title: {
            type: String
        },
        value: {
            type: String
        },
        image: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event)
        }
    }
}
</script>