<template>
    <div class="c-button__loading">
        <Loading :loadType="loadType" color="var(--button-load-color)" />
    </div>
</template>

<script>
export default {
    name: 'ButtonLoading',
    props: {
        loadType: {
            type: String,
        },
    },
}
</script>