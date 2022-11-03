<template>
    <div class="c-dropdown-menu__item">
        <div @click="show($event)" class="c-dropdown-menu__item">
            <span class="c-dropdown-menu__title">
                <div class="c-ellipsis">
                    {{ title ? title : value.length > 0 ? value[0].text : '' }}
                </div>
            </span>
        </div>
        <div class="c-dropdown-item__content">
            <div
                @click="changeOption(option, $event)"
                v-for="(option, key) in options"
                class="c-dropdown-item__option"
                :key="key"
            >
                {{ option.text }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DropDownMenuItem',
    props: {
        value: {
            type: [String, Array],
            default: '',
        },
        options: {
            type: Array,
            default: () => [],
        },
        title: {
            type: String,
        },
    },
    data() {
        return {}
    },
    methods: {
        show(e) {
            if (e.currentTarget.nextElementSibling.style.display === 'block') {
                e.currentTarget.nextElementSibling.style.display = 'none'
            } else {
                let contentList = document.querySelectorAll('.c-dropdown-item__content')
                for (const c of contentList) {
                    if (c.style.display === '' || c.style.display === 'block') {
                        c.style.display = 'none'
                    }
                }
                e.currentTarget.nextElementSibling.style.display = 'block'
            }
            let el = this.$el.children
            let result = false
            for (const e of el) {
                if (e.classList[0] === 'c-dropdown-menu__item') {
                    result = e.classList.toggle('c-dropdown-menu__item__show')
                }
            }
            if (result) {
                let itemList = document.querySelectorAll('.c-dropdown-menu__item')
                for (const c of itemList) {
                    c.classList.remove('c-dropdown-menu__item__show')
                }
                e.currentTarget.classList.add('c-dropdown-menu__item__show')
            }
        },
        changeOption(option, e) {
            let value = option.value
            // props.value类型是string代表单选，props.value类型是Array代表多选
            if (typeof this.value === 'string') {
                this.$emit('input', value)
                let childNodes = e.currentTarget.parentNode.childNodes
                for (let node of childNodes) {
                    node.classList.remove('c-dropdown-item__option__active')
                }
                e.currentTarget.classList.add('c-dropdown-item__option__active')
            } else {
                if (this.value.length == 0) {
                    this.value.push({
                        value: value,
                    })
                    e.currentTarget.classList.add('c-dropdown-item__option__active')
                } else {
                    let b = true
                    for (let i = 0; i < this.value.length; i++) {
                        if (this.value[i].value === value) {
                            b = false
                            this.value.splice(i, 1)
                            e.currentTarget.classList.remove('c-dropdown-item__option__active')
                        }
                    }
                    if (b) {
                        this.value.push({
                            value: value,
                        })
                        e.currentTarget.classList.add('c-dropdown-item__option__active')
                    }
                }
            }
        },
    },
}
</script>

<style lang="less">
@import './index.less';
</style>