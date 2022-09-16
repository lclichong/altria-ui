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
                @click="changeOption(o.value, $event)"
                v-for="(o, key) in options"
                class="c-dropdown-item__option"
                :key="key"
            >
                {{ o.text }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DropDownMenuItem',
    props: {
        value: {
            type: Array,
            default: () => [],
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
        return {
            showOptions: false,
        }
    },
    methods: {
        show(e) {
            if (e.currentTarget.nextElementSibling.style.display === 'block') {
                e.currentTarget.nextElementSibling.style.display = 'none'
            } else {
                let classList = document.querySelectorAll('.c-dropdown-item__content')
                for (const c of classList) {
                    if (c.style.display === '' || c.style.display === 'block') {
                        c.style.display = 'none'
                    }
                }
                e.currentTarget.nextElementSibling.style.display = 'block'
            }
        },
        changeOption(value, e) {
            console.log('value', value)
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
            console.log(this.value)
        },
    },
}
</script>

<style lang="less">
@import './index.less';
</style>