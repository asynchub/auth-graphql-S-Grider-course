const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const UserType = require('./UserType');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user; // user property by passportjs
      }
    }
  }
});

module.exports = RootQueryType;
