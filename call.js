Function.prototype.myCall = function (obj, ...args) {
    obj = obj || window
    obj.func = this
    let res = obj.func(...args)
    delete obj.func
    return res
}