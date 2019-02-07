const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(`${process.env.NEWS_KEY}`);

const data = []

newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us',
    sortBy: 'top'

  }).then(response => {
    // var articles = []

    response.articles.slice(0, 3).map((news) => {
        // articles = [...articles, {source: news.source.name, title: news.title, articleUrl: news.url, articleImg: news.urlToImage} ]
        data.push({source: news.source.name, title: news.title, articleURL: news.url, articleImg: news.urlToImage})
    })
    
  });

module.exports = {
    data
}