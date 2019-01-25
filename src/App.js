import React, { Component } from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  margin: 0;
  padding: 15px;

  font-size: 3rem;
`;

const buttonColor = ({type}) => {
  return type === 'cancel' ? 'tomato;' : '#fff';
}

const Button = styled.button`
  padding: 15px 30px;

  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;

  background-color: ${buttonColor.bind(this)};
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
`;

const AppWrapper = styled.div`
  header {
    background: teal;

    &:hover {
      background: red;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header>Header</header>
        <Heading>Heading</Heading>
        <Button type="cancel">Button</Button>
        <Button type="save">Button</Button>
      </AppWrapper>
    );
  }
}

export default App;
