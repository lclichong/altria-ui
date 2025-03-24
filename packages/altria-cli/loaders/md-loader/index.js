const MarkdownIt = require('markdown-it')
const highlight = require('./highlight.js')

const md = new MarkdownIt({
    html: true,
    highlight,
})

function mdLoader(source) {
    const html = md.render(source)
    const htmlContentArr = html.split('\n')
    let indexArr = []
    htmlContentArr.forEach((dom, index) => {
        if (dom.startsWith('<h3>')) {
            let obj = {
                type: 'h3',
                index,
            }
            indexArr.push(obj)
        } else if (dom.startsWith('<h2>') && indexArr.length > 0) {
            let obj = {
                type: 'h2',
                index,
            }
            indexArr.push(obj)
        }
    })
    let num = 0
    let isStart = false
    for (let i = 0; i < indexArr.length; i++) {
        if (i === 0) {
            htmlContentArr.splice(indexArr[i].index, 0, '<div class="card">')
            isStart = true
            num++
        } else {
            if (indexArr[i].type == 'h2') {
                htmlContentArr.splice(indexArr[i].index + num, 0, '</div>')
                isStart = false
                num++
            } else {
                if (isStart) {
                    htmlContentArr.splice(indexArr[i].index + num, 0, '</div>')
                    htmlContentArr.splice(indexArr[i].index + num + 1, 0, '<div class="card">')
                    num = num + 2
                } else {
                    isStart = true
                    htmlContentArr.splice(indexArr[i].index + num, 0, '<div class="card">')
                    num++
                }
            }
        }
    }
    if (indexArr.length > 0) {
        if (indexArr[indexArr.length - 1].type === 'h3') {
            htmlContentArr.push('</div>')
        }
    }
    return `<template><section v-pre>${htmlContentArr.join('\n')}</section></template>`
}

module.exports = mdLoader
