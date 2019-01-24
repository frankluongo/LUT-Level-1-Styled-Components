import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  margin: 0;
  padding: 15px;

  font-size: 3rem;
`;

const buttonColor = (type) => {
  return '#fff';
}

const Button = styled.button`
  padding: 15px 30px;

  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;

  background-color: ${({type}) => type === 'cancel' ? 'tomato;' : '#fff'};
  border: 1px solid #eee;
  border-radius: 4px;
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Heading>Heading</Heading>
        <Button type="cancel">Button</Button>
        <Button type="save">Button</Button>
      </Fragment>
    );
  }
}

export default App;
