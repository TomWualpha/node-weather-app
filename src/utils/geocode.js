const request=require('request')

//The coordinates of the feature’s center in the form [longitude,latitude]. This may be the literal centroid of the feature’s geometry, or the center of human activity within the feature (for example, the downtown area of a city).

const geocode = (address, callback) => {
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?country=US&access_token=pk.eyJ1IjoidG9td3VhbHBoYSIsImEiOiJjazNwODI1Z2EwMGYyM21sbW8yNTdicTVrIn0.JaA6uL_eQKKT5FV6TDHV0Q&limit=1'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to server', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }

    })
}

module.exports =geocode
