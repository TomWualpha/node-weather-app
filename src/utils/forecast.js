const request = require('request')


// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
const forecast = (latitude, longitude, callback)=>{
    url = 'https://api.darksky.net/forecast/962b6cc5fa7f347ec8f5dd6433322ce7/'+latitude+','+longitude+'?units=si'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to server', undefined)
        } else if (response.body.error) {
            console.log(url)
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                summary: response.body.currently.summary,
                temperature: response.body.currently.temperature,
                timezone: response.body.timezone
            })
        }

    })
}

module.exports = forecast




