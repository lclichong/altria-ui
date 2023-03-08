<template>
    <div></div>
</template>

<script>
import { createName } from '../utils/create-name'
export default {
    name: createName('icon'),
    props: {
        name: {
            type: String,
        },
        size: {
            type: [String, Number],
        },
        color: {
            type: String,
        },
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>