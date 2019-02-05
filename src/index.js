const { GraphQLServer } = require('graphql-yoga')
// const Weather = require('./resolvers/Weather')
const WeatherAPI = require('../apiDatasource/weatherAPI');

const typeDefs = `
type Query {
  info: String!
  weather(city: String!): Weather
}

type Weather {
  id: Int!
  name: String!
  condition: String!
}`

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    weather: (parent, { city }) => WeatherAPI(city)
  },

  Weather: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    condition: (parent) => parent.condition
  }
}

// 3
const server = new GraphQLServer({
  // typeDefs: './src/schema.graphql',
  typeDefs,
  resolvers,
})


server.start(() => console.log(`Server is running on http://localhost:4000`))