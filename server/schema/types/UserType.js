import { graphql } from 'graphql';
import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

const UserType = new GraphQLObjectType({
  name = 'UserType',
  fields: {
    email: { type: GraphQLString }

  }
});

module.exports = UserType;
