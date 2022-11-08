/**
 * createBem helper
 * const bem = createBem('button')
 * bem() // 'button'
 * bem('text') // 'button__text'
 * bem(null, { disabled : true }) // 'button button--disabled'
 * bem('text', { disabled : true }) // 'button__text button__text--disabled'
 * bem(null, ['disabled', 'primary']) // 'button button--disabled button--primary'
 */

const parserBem = (el, mods) => {
    if (!mods) return ''
    if (typeof mods === 'string') return ' ' + `${el}--${mods}`
    if (Array.isArray(mods)) {
        return mods.reduce((acc, cur) => acc + parserBem(el, cur), '')
    }
    return Object.keys(mods).reduce((acc, cur) => {
        const bool = typeof mods[cur] === 'boolean'
        const modifier = bool && mods[cur] ? cur : mods[cur]
        return acc + parserBem(el, modifier)
    }, '')
}

export const createBem = (base) => {
    return (el, mods) => {
        el = el ? `${base}__${el}` : base
        return el + parserBem(el, mods)
    }
}
