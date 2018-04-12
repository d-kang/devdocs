import React, { Component } from 'react';
import { Query } from 'react-apollo';

import GET_STARSHIP from './hello.gql';

const Error = () => <div>Error...</div>;
const Fetching = () => <div>Fetching...</div>;
const StarshipList = ({ starships }) => (
  <div>{JSON.stringify(starships, null, 2)}</div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Query query={GET_STARSHIP} variables={{ test: 'Millennium Falcon' }}>
          {({ loading, error, data }) => {
            if (error) return <Error />;
            if (loading || !data) return <Fetching />;

            return <StarshipList starships={data} />;
          }}
        </Query>
      </div>
    );
  }
}

export default App;
