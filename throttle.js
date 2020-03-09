// 立即执行版

function throttle(f, delay) {
    let canRun = true
    return function () {
        let context = this
        let args = arguments
        if (canRun) {
            canRun = false
            setTimeout(() => {
                f.apply(context, args)
                canRun = true
            })
        } else {
            return
        }
    }
}

// 立即执行版
function throttleImme(f, delay, immediate) {
    immediate = immediate || false
    let canRun = true
    let count = 0
    return function () {
        let context = this
        let args = arguments
        if (canRun) {
            if (immediate || !count) {
                canRun = false
                f.apply(context, args)
                canRun = true
            } else {
                canRun = false
                setTimeout(() => {
                    f.apply(context, args)
                    canRun = true
                })
            }
        } else {
            return
        }
    }
}