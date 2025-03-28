<template>
    <div class="container">
        <alt-list v-model="loading" :finished="finished" @load="onLoad">
            <alt-cell v-for="l,key in list" :key="key" :title="'数据' + (key + 1)"></alt-cell>
        </alt-list>
    </div>
</template>

<script>
import AltCell from '../../cell/index.js'

export default {
    components: {
        AltCell
    },
    created() {
        for (let i = 0; i < 15; i++) {
            this.list.push(i)
        }
    },
    mounted() {},
    data() {
        return {
            list: [],
            count: 0,
            finished: false,
            loading: false
        }
    },
    methods: {
        onLoad() {
            if (this.loading || this.finished) return
            this.count++
            if (this.count < 5) {
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                    for (let i = 0; i < 5; i++) {
                        this.list.push(i)
                    }
                }, 2000)
            } else {
                this.finished = true
            }
        }
    }
}
</script>