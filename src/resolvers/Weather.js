const WeatherAPI = require('../../apiDatasource/weatherAPI')

async function Weather(parent, { city }) {
    const data = await WeatherAPI(city)
    return {
        id: data.id,
        name: data.name,
        condition: data.condition,
        iconURL: `http://openweathermap.org/img/w/${data.icon}.png`
    }
}

module.exports = {
    Weather
}