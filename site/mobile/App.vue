<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

::-webkit-scrollbar {
    display: none;
}

html {
    height: 100vh;
    font-size: 14px;
}

body {
    height: 100vh;
    margin: 0px;
}

* {
    touch-action: none;
    touch-action: pan-y;
}

.demo {
    padding: 5vw;
    text-align: center;
    p {
        line-height: 35px;
        margin-top: 10px;
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
</style>
