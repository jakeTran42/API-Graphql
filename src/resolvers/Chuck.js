const ChuckAPI = require('../../apiDatasource/chuckAPI')

async function Chuck() {
    const data = await ChuckAPI()
    return data
}

module.exports = {
    Chuck
}