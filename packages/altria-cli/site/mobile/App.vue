<template>
    <div class="app">
        <demo-nav></demo-nav>
        <router-view />
    </div>
</template>

<style lang="less">
::-webkit-scrollbar {
    display: none;
}

html {
    height: 100vh;
    font-size: 14px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
    height: 100vh;
    margin: 0px;
}

.app {
    height: 100%;
}

* {
    touch-action: none;
    touch-action: pan-y;
}

.alt-container {
    height: calc(100% - 56px);
    .demo {
        padding: 5vw;
        text-align: center;
        p {
            line-height: 35px;
            margin-top: 10px;
        }
    }
}

.mt-5vw {
    margin-top: 5vw;
}

.mt-10vw {
    margin-top: 10vw;
}

.mt-15vw {
    margin-top: 15vw;
}

p {
    margin-block-start: 0px;
    margin-block-end: 0px;
    text-align: center;
}

a {
    text-decoration: none;
}
</style>
