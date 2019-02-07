const WeatherAPI = require('../../apiDatasource/weatherAPI')
const ArticleAPI = require('../../apiDatasource/newsAPI')
const ChuckAPI = require('../../apiDatasource/chuckAPI')

// const Chuck = require('./resolvers/Chuck')
// const Article = require('./resolvers/Article')
// const Weather = require('./resolvers/Weather')

// async function weather(parent, { city }) {
//     const data = await WeatherAPI(city)
//     return {
//         id: data.id,
//         name: data.name,
//         condition: data.condition,
//         iconURL: `http://openweathermap.org/img/w/${data.icon}.png`
//     }
// }

// async function news() {
//     const data = await ArticleAPI.data
//     return data
// }

// async function chuckJoke() {
//     const data = await ChuckAPI()
//     return data
// }


async function api(parent, args) {

    const weather = async function() {
        return await WeatherAPI(args.city)
    }

    const news = async function() {
        return await ArticleAPI.data
    }

    const chuckJoke = async function() {
        return await ChuckAPI()
    }

    return {
        weather,
        news,
        chuckJoke
    }
}

function info() {
    return "This is an API aggregation made by Jake Tran"
}

module.exports = {
    // weather,
    // news,
    // chuckJoke,
    info,
    api
}