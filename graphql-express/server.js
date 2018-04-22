const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
    add(a: Int!, b: Int!): Int!
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => `Hello world!`,
  add: ({ a, b }) => a + b,
  rollDice: ({ numDice, numSides }) => {
    const output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  }
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
