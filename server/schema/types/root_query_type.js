const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: { type: GraphQLID }
});

module.exports = RootQueryType;
