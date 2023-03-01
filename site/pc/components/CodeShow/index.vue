<template>
    <div class="alt-doc__codeShow">
        <div class="desc">
            <h3>{{title}}</h3>
            <p class="alt-code-show__desc">{{desc}}</p>
        </div>
        <div class="codeShow__component">
            <component :is="name"></component>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AltCodeShow',
    props: {
        name: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        desc: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="less" scoped>
.alt-doc__codeShow {
    margin-bottom: 24px;
    padding: 24px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 12px #ebedf0;
    .codeShow__component {
        padding: 20px;
        border-radius: 5px;
        border: 1px solid #eaeaea;
        p {
            font-size: 14px;
        }
    }
}
</style>