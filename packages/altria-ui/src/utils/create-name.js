export const COMPONENT_PREFFIX_NAME = 'alt'

export const createName = (name) => {
    name = COMPONENT_PREFFIX_NAME + '-' + name
    return name
}
