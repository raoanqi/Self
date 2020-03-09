Array.prototype.myReduce = function (f, base) {
    for (let i = 0; i < this.length; i++) {
        // 如果没有初始值
        if (typeof (base) === 'undefined') {
            base = f(this[i], this[i + 1], i + 1, this)
            i++
        } else {
            base = f(base, this[i], i, this)
        }
    }
    return base
}

let arr = [1, 2, 3, 4, 5, 6]
console.log(arr.myReduce(function (total, current) { return total + current }, 0))