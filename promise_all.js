let myPromiseAll = function (promises) {
    let res = []
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            arr[i].then((data) => {
                res[i] = data
                if (res.length === promises.length) {
                    resolve(res)
                }
            }, reject)
        }
    })
}