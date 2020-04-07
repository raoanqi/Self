Function.prototype.myApply = function (obj, ...args) {
    obj = obj || window
    obj.func = this
    let res = obj.func(...args[0])
    delete obj.func
    return res
}