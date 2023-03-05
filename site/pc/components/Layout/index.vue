<template>
    <div class="alt-doc">
        <aside>
            <sider-bar></sider-bar>
        </aside>
        <main ref="main" class="alt-doc__main">
            <slot />
        </main>
        <div class="alt-doc__simulator">
            <iframe ref="iframe" :src="simulator" :style="simulatorStyle" frameborder="0" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Layout',
    mounted() {
        window.addEventListener('resize', () => {
            this.windowHeight = window.innerHeight
        })
    },
    computed: {
        simulatorStyle() {
            const height = Math.min(640, this.windowHeight - 90)
            return {
                height: height + 'px'
            }
        }
    },
    watch: {
        $route: {
            handler() {
                const menuName = window.location.hash
                this.simulator = `${this.$simulatorPath}/mobile.html${menuName}`
                this.$nextTick(() => {
                    this.$refs.main.scrollTop = 0
                })
            },
            immediate: true
        }
    },
    data() {
        return {
            simulator: '',
            windowHeight: window.innerHeight
        }
    }
}
</script>

<style lang="less">
@import '../../styles/highlight.less';

.alt-doc__main {
    .card {
        margin-bottom: 24px;
        padding: 15px 24px;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 8px 12px #ebedf0;
    }
    p {
        color: #34495e;
        font-size: 15px;
        line-height: 26px;
    }
    table {
        width: 100%;
        margin-top: 12px;
        color: #34495e;
        font-size: 14px;
        line-height: 1.5;
        border-collapse: collapse;
        em {
            color: #4fc08d;
            font-size: 14px;
            font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;
            font-style: normal;
            -webkit-font-smoothing: auto;
        }
        th,
        td {
            text-align: left;
            line-height: 35px;
        }
    }
    pre {
        border: 1px solid #eaeaea;
        border-radius: 5px;
        padding: 20px;
        margin: 1.5rem 0;
        overflow: auto;
        font-size: 0.875rem;
    }
    code {
        position: relative;
        display: block;
        overflow-x: auto;
        color: #58727e;
        font-size: 0.8125rem;
        font-weight: 400;
        font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;
        line-height: 1.25rem;
        white-space: pre-wrap;
        word-wrap: break-word;
        -webkit-font-smoothing: auto;
    }
    a {
        margin: 0 1px;
        color: #1989fa;
        -webkit-font-smoothing: auto;
    }
}

.alt-doc__main p > code,
.alt-doc__main li > code,
.alt-doc__main table code {
    display: inline;
    margin: 0 2px;
    padding: 2px 5px;
    font-family: inherit;
    word-break: keep-all;
    background-color: #f7f8fa;
    border-radius: 4px;
    -webkit-font-smoothing: antialiased;
}
</style>

<style lang="less" scoped>
.alt-doc {
    display: flex;
    flex-direction: row;
    height: 100%;
    aside {
        min-width: 220px;
        max-width: 220px;
        background-color: #fff;
        box-shadow: 0 8px 12px #ebedf0;
        padding: 20px;
        font-size: 15px;
        box-sizing: border-box;
    }

    .alt-doc__main {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        section {
            padding-left: 40px;
            padding-right: 450px;
            min-width: 730px;
        }
    }

    .alt-doc__simulator {
        position: absolute;
        top: 70px;
        right: 55px;
        z-index: 1;
        box-sizing: border-box;
        width: 360px;
        min-width: 360px;
        overflow: hidden;
        background: #fafafa;
        border-radius: 12px;
        box-shadow: #ebedf0 0 4px 12px;

        @media (max-width: 1440px) {
            right: auto;
            left: 1035px;
        }

        &-fixed {
            position: fixed;
            top: 30px;
        }

        iframe {
            display: block;
            width: 100%;
        }
    }
}
</style>