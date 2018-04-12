import { graphql, buildSchema } from 'graphql';
import gql from 'graphql-tag';
import Hi from './hello.gql';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Character {
    name: String
  }

  type Query {
    hellos: String
    hero: Character
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hellos: () => 'Hello World!',
  hero: () => ({
    name: 'r2d2',
  }),
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hellos hero { name } }', root).then(res =>
  console.log('res.data', res.data)
);

const query1 = `query Hi {
  Starship(name: "Millennium Falcon") {
    name
    hyperdriveRating
    pilots(orderBy: height_DESC) {
      name
      height
      homeworld {
        name
      }
    }
  }
}`;

const argument = 'Millennium Falcon';
const query2 = gql`
  query Hi($test: String) {
    Starship(name: $test) {
      name
      hyperdriveRating
      pilots(orderBy: height_DESC) {
        name
        height
        homeworld {
          name
        }
      }
    }
  }
`;

console.log('query2', query2);
postData('https://api.graph.cool/simple/v1/swapi', {
  query: query2,
  variables: { test: 'Millennium Falcon' },
})
  .then(res => console.log('MAIN res.data >', res.data))
  .catch(error => console.error(error));

function postData(url, data) {
  return fetch(url, {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  }).then(response => response.json());
}
