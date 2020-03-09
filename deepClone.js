let checkType = (target) => Object.prototype.toString.call(target).slice(8, -1)

let deepClone = (target) => {
    let res
    if (checkType(target) === 'Object') {
        res = {}
    } else if (checkType(target) === 'Array') {
        res = []
    } else {
        return target
    }

    for (let index in target) {
        if (checkType(target[index]) === 'Object' || checkType(target[index]) === 'Array') {
            res[index] = deepClone(target[index])
        } else {
            res[index] = target[index]
        }
    }
    return res
}

// 另一种常见的简单方式
JSON.parse(JSON.stringify(target))
/*
但是有四个特殊情况不能解决：
（1）undefined；
（2）函数；
（3）symbol；
（4）循环引用；

推荐使用loadsh中的深拷贝--->记得看一下其中的源码
*/