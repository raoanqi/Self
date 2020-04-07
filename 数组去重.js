// 第一种：创建新数组
let first = function (arr) {
    let res = []
    let len = arr.length
    for (let i = 0; i < len; i++) {
        if (res.indexOf(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}

// 第二种：ES6的set
let second = function (arr) {
    return [...new Set(arr)]
}

// 第三种：先排序，然后将前后不同的元素加入到结果中
// 注意这种方式的循环上下限，而且第一个元素一开始就要被加入到res中
let third = function (arr) {
    arr.sort((a, b) => a - b)
    let len = arr.length
    let res = [arr[0]]
    for (let i = 1; i < len; i++) {
        if (arr[i - 1] !== arr[i]) {
            res.push(arr[i])
        }
    }
    return res
}

// 第四种：利用对象来记录出现过的值
let forth = function (arr) {
    let res = []
    let len = arr.length
    let obj = {}
    for (let i = 0; i < len; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1
            res.push(arr[i])
        } else {
            obj[arr[i]]++
        }
    }
    return res
}

// 第五种：使用ES6中的includes
let fifth = function (arr) {
    let res = []
    let len = arr.length
    for (let i = 0; i < len; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}