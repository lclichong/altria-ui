<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    created() {},
    data() {
        return {}
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

html {
    font-size: 4vw;
}

html,
body {
    height: 100vh;
    margin: 0px;
}

* {
    touch-action: none;
    touch-action: pan-y;
}
</style>
