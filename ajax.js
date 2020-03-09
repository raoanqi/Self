let ajax = function (url, type, data, success, failed) {
    let xhr
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }

    type = type.toUpperCase()

    if (typeof (data) === 'object') {
        let str = ``
        for (let index in data) {
            str += `${index}=${data[index]}&`
        }
        data = str.replace(/&$/, '')
    }

    if (type === 'GET') {
        xhr.open('GET', `${url}?${data}`, true)
        xhr.send()
    } else if (type === 'POST') {
        xhr.open('POST', url, true)
        xhr.send(data)
    }

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if ((xhr.status === 304) || (xhr.status >= 200 && xhr.status < 300)) {
                success(xhr.responseText)
            } else {
                failed(xhr.status)
            }
        }
    }
}