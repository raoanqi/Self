function myInstanceof(left, right) {
    left = left.__proto__
    let right = right.prototype
    while (true) {
        if (left === null || right === undefinied) {
            return false
        } else if (left === right) {
            return true
        } else {
            left = left.__proto__
        }
    }
}