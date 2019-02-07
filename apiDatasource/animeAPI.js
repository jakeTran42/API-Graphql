const request = require("request-promise");

module.exports = AnimeAPI = async () => {

    const season = ['Winter', 'Winter', 'Winter','Spring', 'Spring', 'Spring', 'Summer', 'Summer', 'Summer', 'Fall', 'Fall', 'Fall']

    var d = new Date();
    var currentYear = d.getFullYear();
    var currentMonth = d.getMonth();
    var currentSeason = season[currentMonth-1]
    console.log(currentSeason)

    var options = { method: 'GET',
        url: 'https://kitsu.io/api/edge/anime',
        qs: 
        { 'filter[seasonYear]': `${currentYear}`,
            'fields[anime]': 'id,titles',
            'filter[season]': `${currentSeason}`,
            sort: 'popularityRank',
            'page[limit]': '3' },
        headers: 
        { 'Postman-Token': 'b216764d-66ce-475c-af69-53d3d01c069c',
            'cache-control': 'no-cache' },
        json: true
    };

    try {
        var result = await request(options);

    } catch (err) {
        console.log(err)
    }

}