<template>
    <div class="c-button__loading">
        <Loading :load-type="loadType" :color="loadColor" :load-text="loadText" />
    </div>
</template>

<script>
export default {
    name: 'ButtonLoading',
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