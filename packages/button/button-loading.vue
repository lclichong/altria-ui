<template>
    <div class="alt-button__loading">
        <alt-loading :load-type="loadType" :color="loadColor" :load-text="loadText"></alt-loading>
    </div>
</template>

<script>
import { createName } from '../utils/create-name'

export default {
    name: createName('button-loading'),
    props: {
        loadType: {
            type: String,
        },
        loadColor: {
            type: String,
            default: 'var(--button-load-color)',
        },
        loadText: {
            type: String,
        },
    },
}
</script>