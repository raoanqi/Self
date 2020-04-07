// 非立即执行版
function debounce(f, delay) {
    let timer
    return function () {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            f.apply(context, args)
        }, delay)
    }
}

// 第一次进入立即执行版
function debounceImme(f, delay, immediate) {
    immediate = immediate || false
    let timer
    let count = 0
    return function () {
        let context = this
        let args = arguments
        clearTimeout(timer)
        if (immediate || !count) {
            f.apply(context, args)
            count++
        } else {
            setTimeout(() => {
                f.apply(context, args)
                count++
            }, delay)
        }
    }
}