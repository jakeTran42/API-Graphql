require('dotenv').config()
const request = require('request')

module.exports = WeatherAPI = (city) => {
    const apiKey = process.env.WEATHER_KEY

    var options = { method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather',
        qs: 
        { q: `${city},us`,
            APPID: `${apiKey}` },
        headers: 
        { 'Postman-Token': '774af781-d4b0-45b7-94f6-7c6e14fb8865',
            'cache-control': 'no-cache' } 
    };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);

    var body = JSON.parse(body)

    const data = {id: body.id, name: body.name, condition: body.weather[0].description}

    console.log(data)

    return data

    });

}