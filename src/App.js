import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  background-color: #eee;
  padding: 15px;
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Heading>
          Heading
        </Heading>
      </Fragment>
    );
  }
}

export default App;
