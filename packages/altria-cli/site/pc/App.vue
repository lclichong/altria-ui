<template>
    <div id="app">
        <Layout>
            <router-view />
        </Layout>
    </div>
</template>

<style lang="less">
@import url('../common/style/var.less');

::-webkit-scrollbar {
    display: none;
}

html,
body {
    height: 100%;
}

body {
    margin: 0px;
    background-color: #f7f8fa;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 100%;
    overflow: hidden;
}

a {
    text-decoration: none;
}
</style>
