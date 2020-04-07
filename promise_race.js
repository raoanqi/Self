let myPromiseRace = function (promises) {
    return new Promise((resolve, reject) => {
        for (let item in promises) {
            item.then((data) => {
                resolve(data)
            }, reject)
        }
    })
}