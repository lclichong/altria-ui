<template>
    <div class="c-dropdown-menu__item">
        <div @click="show" :class="['c-dropdown-menu__item', contentShow ? 'c-dropdown-menu__item--show' : '']">
            <span class="c-dropdown-menu__title">
                <div class="c-ellipsis">{{ title ? title : value.length > 0 ? value[0].text : '' }}</div>
            </span>
        </div>
        <div
            :class="['c-dropdown-item__content', contentShow ? 'c-dropdown-item__content--show' : 'c-dropdown-item__content--hide']"
        >
            <div
                @click="changeOption(option)"
                v-for="(option, key) in options"
                :class="['c-dropdown-item__option', setClassName(option)]"
                :key="key"
            >
                {{ option.text }}
                <svg
                    :class="['c-dropdown-item__option__svg', setClassName(option,'svg')]"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    data-testid="geist-icon"
                    shape-rendering="geometricPrecision"
                    viewBox="0 0 24 24"
                    data-v-02fcfef8
                    style="color: currentcolor;"
                >
                    <path d="M20 6L9 17l-5-5" />
                </svg>
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
            default: ''
        },
        options: {
            type: Array,
            default: () => []
        },
        title: {
            type: String
        }
    },
    data() {
        return {
            contentShow: false
        }
    },
    methods: {
        setClassName(option, type) {
            let active = false
            if (typeof this.value === 'string') {
                active = this.value === option.value
            } else {
                for (let i = 0; i < this.value.length; i++) {
                    if (this.value[i].value === option.value) {
                        active = true
                        break
                    }
                }
            }
            if (type) {
                return active ? 'c-dropdown-item__option__svg--show' : 'c-dropdown-item__option__svg--hide'
            }
            return active ? 'c-dropdown-item__option__active' : ''
        },
        show() {
            if (!this.contentShow) {
                this.$parent.$children.forEach((value) => {
                    if (value.contentShow) {
                        value.contentShow = false
                    }
                })
                this.contentShow = !this.contentShow
            } else {
                this.contentShow = !this.contentShow
            }
            this.$parent.itemShow = this.contentShow
        },
        changeOption(option) {
            let optionVal = option.value
            // props.value类型是string代表单选，props.value类型是Array代表多选
            if (typeof this.value === 'string') {
                if (this.value === optionVal) {
                    this.$emit('input', '')
                } else {
                    this.$emit('input', optionVal)
                }
            } else {
                if (this.value.length == 0) {
                    this.value.push({
                        value: optionVal
                    })
                } else {
                    let result = true
                    for (let i = 0; i < this.value.length; i++) {
                        if (this.value[i].value === optionVal) {
                            result = false
                            this.value.splice(i, 1)
                        }
                    }
                    if (result) {
                        this.value.push({
                            value: optionVal
                        })
                    }
                }
            }
            this.setClassName(option)
        }
    }
}
</script>

<style lang="less">
@import './index.less';
</style>