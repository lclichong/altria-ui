const context = require.context('./', true, /\.vue$/)

export default {
    install: (vue) => {
        context
            .keys()
            .map((path) => {
                const exampleModule = context(path)
                return exampleModule
            })
            .forEach((module) => {
                vue.component(module.default.name, module.default)
            })
    },
}
