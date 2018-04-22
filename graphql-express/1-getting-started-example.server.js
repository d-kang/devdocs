const { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hellos: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hellos: () => {
    return `Hello world!`;
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hellos }', root)
  .then(response => {
    console.log('response', response);
  });
