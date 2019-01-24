import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  margin: 0;
  padding: 15px;

  font-size: 3rem;

  background-color: #eee;
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Heading>Heading</Heading>
      </Fragment>
    );
  }
}

export default App;
