function myNew(f, ...args) {
    let obj = {}
    if (obj.__proto__) {
        obj.__proto__ = f.prototype
    }
    f.apply(obj, args)
    return obj
}

