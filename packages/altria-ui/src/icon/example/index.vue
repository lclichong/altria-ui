<template>
    <div class="alt-container">
        <div class="demo">
            <p>大小</p>
            <alt-icon name="checkbox-marked-circle"></alt-icon>
            <alt-icon size="30" name="checkbox-marked-circle"></alt-icon>
        </div>
        <div class="demo">
            <p>颜色</p>
            <alt-icon color="#2196f3" size="30" name="checkbox-marked-circle"></alt-icon>
            <alt-icon color="#2196f3" size="30" name="check-circle-outline"></alt-icon>
        </div>
        <div class="demo">
            <p>点击事件</p>
            <alt-icon @click="handleClick" color="#2196f3" size="30" name="checkbox-marked-circle"></alt-icon>
        </div>
        <div class="demo-icon-title">图标列表</div>
        <div class="demo-icon-list">
            <div v-for="i in icons" :key="i" :data-clipboard-text="i" class="demo-icon">
                <alt-icon size="30" :name="i"></alt-icon>
                <div class="demo-icon-name">{{ i }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import icons from '@altria/icons'
import Clipboard from 'clipboard'

export default {
    created() {
        this.icons = icons
    },
    mounted() {
        const clipboard = new Clipboard('.demo-icon', {
            text: (trigger) => `<alt-icon name="${trigger.getAttribute('data-clipboard-text')}"></alt-icon>`
        })
        clipboard.on('success', (e) => {
            this.$Dialog.alert({
                title: '提示',
                message: `${e.text}复制成功!`
            })
        })
    },
    data() {
        return {
            icons: []
        }
    },
    methods: {
        handleClick() {
            this.$Dialog.alert({
                title: '提示',
                message: '点击成功'
            })
        }
    }
}
</script>

<style lang="less" scoped>
.alt-container {
    height: 100%;
    p {
        text-align: left;
    }
    .demo {
        text-align: left;
    }
    .demo-icon-title {
        padding: 5vw 5vw 0 5vw;
    }
    .demo-icon-list {
        padding: 5vw;
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .demo-icon {
            display: inline-flex;
            flex-direction: column;
            width: 100px;
            height: 100px;
            padding: 10px;
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
            box-shadow: 0 8px 12px #ebedf0;
            cursor: pointer;
            .demo-icon-name {
                width: 100%;
                font-size: 12px;
                text-align: center;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin-top: 10px;
            }
        }
    }
}
</style>
