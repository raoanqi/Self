// map接收三个参数，currentValue--当前元素，index--当前的索引，arr--传入的数组对象

Array.prototype.myMap = function (f) {
    let res = []
    for (let i = 0; i < this.length; i++) {
        res.push(f(this[i], i, this))
    }
    return res
}