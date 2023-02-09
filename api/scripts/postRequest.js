const postRequest = (url, body = {}, headers = {}) => {

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Encoding': 'application/json',
            ...headers
        },
        body: JSON.stringify({
            ...body
        })
    }).
        then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
        }).
        catch((err) => {
            console.log(err)
        })
}

module.exports = {
    postRequest
}