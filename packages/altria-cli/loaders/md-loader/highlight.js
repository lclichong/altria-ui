const hljs = require('highlight.js')

module.exports = function highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(str, { language: lang, ignoreIllegals: true })
            .value
    }
    return ''
}
