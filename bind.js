Function.prototype.myBind = function (obj, ...args) {
    obj = obj || window
    let bindFunc = this
    return function () {
        let argsArr = [].slice.call(arguments)
        return bindFunc.apply(obj, args.concat(argsArr))
    }
}

