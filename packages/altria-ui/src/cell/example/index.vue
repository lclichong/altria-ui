<template>
    <div class="alt-container">
        <alt-cell title="单元格" value="内容" />
        <alt-cell>
            <template slot="title">
                <alt-image
                    width="80%"
                    height="20vw"
                    :src="image"
                    fit="contain"
                ></alt-image>
            </template>
            <template slot="value">
                <p>素胚勾勒出青花笔锋浓转淡</p>
                <p>瓶身描绘的牡丹一如你初妆</p>
                <p>冉冉檀香透过窗心事我了然</p>
            </template>
        </alt-cell>
        <alt-cell>
            <template slot="title">
                <alt-image
                    width="80%"
                    height="20vw"
                    :src="image"
                    fit="cover"
                ></alt-image>
            </template>
            <template slot="value">
                <p>宣纸上走笔至此搁一半</p>
                <p>釉色渲染仕女图韵味被私藏</p>
                <p>而你嫣然的一笑如含苞待放</p>
            </template>
        </alt-cell>
        <alt-cell
            title="你的美一缕飘散、去到我去不了的地方、天青色等烟雨 而我在等你"
            value="炊烟袅袅升起 隔江千万里、在瓶底书汉隶仿前朝的飘逸、就当我为遇见你伏笔"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: 'https://varlet.gitee.io/varlet-ui-vue2/cat.jpg'
        }
    }
}
</script>

<style lang="less">
.alt-container {
    height: 100%;
}
</style>