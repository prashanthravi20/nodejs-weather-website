const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/fcc4d0ca47955ed3d92aca3bc87b6c2f/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' Today\'s high is '+body.daily.data[0].temperatureHigh+' degrees and the low is '+body.daily.data[0].temperatureLow+' degrees. It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast