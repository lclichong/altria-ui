/*
 * @Author: LcLichong 
 * @Date: 2021-07-06 16:06:51 
 * @Last Modified by: LcLichong
 * @Last Modified time: 2021-07-06 16:07:32
 */

function getFnName(fun) {
    let ret = fun.toString()
    ret = ret.substr('function '.length)
    ret = ret.substr(0, ret.indexOf('('))
    return ret
}

export {
    getFnName
}