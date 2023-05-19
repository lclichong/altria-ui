export function on(target, event, handler) {
    target.addEventListener(event, handler, false)
}

export function off(target, event, handler) {
    target.removeEventListener(event, handler)
}
