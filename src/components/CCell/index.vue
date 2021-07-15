<template>
    <div class="cs-cell">
        <div class="cs-cell-title">
            {{ title }}
        </div>
        <div class="cs-cell-value">{{ value }}</div>
    </div>
</template>

<script>
export default {
    name: 'Cell',
    props: {
        title: {
            defalut: '',
            type: String
        },
        value: {
            defalut: '',
            type: String
        }
    }
}
</script>