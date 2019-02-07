const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/Query')
const { Chuck } = require('./resolvers/Chuck')
const {Article} = require('./resolvers/Article')
const { Weather } = require('./resolvers/Weather')

// 2
const resolvers = {
  Query,
  Chuck,
  // Article,
  // Weather
}

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  // typeDefs,
  resolvers,
})


server.start(() => console.log(`Server is running on http://localhost:4000`))