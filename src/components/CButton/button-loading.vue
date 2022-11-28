<template>
    <div class="c-button__loading">
        <Loading :loadType="loadType" :color="loadingColor" />
    </div>
</template>

<script>
export default {
    name: 'ButtonLoading',
    props: {
        loadType: {
            type: String,
        },
        loadingColor: {
            type: String,
            default: 'var(--button-load-color)',
        },
    },
}
</script>