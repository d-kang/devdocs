import React, { Component } from 'react';
import { Query } from 'react-apollo';

import GET_STARSHIP from './hello.gql';

const hi = 4;
const Err = () => <div>Error...</div>;
const Fetching = () => <div>Fetching...</div>;
const StarshipList = ({ starships }) => (
  <div>{JSON.stringify(starships, null, 2)}</div>
);

const App = () => (
  <Query query={GET_STARSHIP} variables={{ test: 'Millennium Falcon' }}>
    {({ loading, error, data }) => {
      if (error) return <Err />;
      if (loading || !data) return <Fetching />;
      console.log('data', data);
      return <StarshipList starships={data} />;
    }}
  </Query>
);

export default App;

// @action sortIngredients() {
//   this.ingredients.forEach(item => {
//     const char = item.title[0];
//     const isNum = !isNaN(parseInt(char, 10));
//     isNum
//       ? (
//         this.sortedIngredients['0-9']
//           ? this.sortedIngredients['0-9'].push(item)
//           : this.sortedIngredients['0-9'] = []
//       )
//       : (
//         this.sortedIngredients[char]
//           ? this.sortedIngredients[char].push(item)
//           : this.sortedIngredients[char] = []
//       )
//   });
// };
