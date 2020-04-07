// 手动实现jsonp
let jsonp = function (url, data, callback) {
    // 处理url
    let str = url.indexOf('?') === -1 ? '?' : '&'
    // 处理参数
    for (let index in data) {
        str += `${index}=${data[index]}`
    }
    // 处理回调函数的名称，在尾部追加一个随机数，避免出现重复的情况
    let suffix = Math.random().toString().replace('.', '')
    let cbVal = `myJsonp_${suffix}`
    let cb = `callback=${cbVal}`
    // 将回调拼接在str的后面
    str += cb
    // 创建一个script标签
    let script = document.createElement('script')
    // 将script标签的src指向指定的域
    script.src = `${url}${str}`
    // 将script标签挂载在body之下
    document.body.appendChild(script)
    // 将回调函数挂载在window对象之下
    window[cbVal] = function (param) {
        callback(param)
        // 回调执行完毕之后将script标签删除
        document.removeChild(script)
    }
}