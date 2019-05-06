const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // GraphQL espera melo menos um field em cada query 
    dummyField: { type: GraphQLID }
  }
});

module.exports = RootQueryType;
