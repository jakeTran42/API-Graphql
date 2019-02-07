const ArticleAPI = require('../../apiDatasource/newsAPI')

async function Article() {
    const data = await ArticleAPI.data
    return data
}

module.exports = {
    Article
}