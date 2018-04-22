const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`

  type Query {
    hello: String
    add: Int
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => `Hello world!`,
  add: () => 3,
};

// Run the GraphQL query '{ hello }' and print out the response

const app = express();
const PORT = process.env.PORT || 4000;
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));


app.listen(PORT, () => {
  console.log('Running a GQL API server at http://localhost:4000/graphql');
});



// graphql(schema, '{ hellos }', root)
//   .then(response => {
//     console.log('response', response);
//   });
