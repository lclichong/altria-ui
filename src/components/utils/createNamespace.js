import { createBem } from './create-bem.js'

export const createNamespace = (name) => {
    name = 'cue-' + name
    return { name, createBem: createBem(name) }
}
