import React, { Component } from 'react';
import { AppWrapper, Heading, Button, StyledFake, Fake } from './elements';
import GlobalStyle from './elements/Global';
import Header from './layouts/Header';
import { Card } from './elements/Cards';
// Install The Polish Library for color functions
// npm install --save polished
// Install the Modifiers Library
// npm install --save styled-components-modifiers


class App extends Component {
  render() {
    return (
      <>
      <Header />
      <AppWrapper>
        <Heading>Heading</Heading>
        <Card>
          <p>This is a card</p>
          <Card.Button modifiers={['typeStandard', 'sizeDefault']}>Button</Card.Button>
        </Card>
        <StyledFake />
        <Fake />
        <Button modifiers={['typeCancel', 'sizeDefault']} top="100">Button</Button>
        <Button modifiers={['typeStandard', 'sizeSmall']}>Button</Button>
        <GlobalStyle />
      </AppWrapper>
      </>
    );
  }
}

export default App;
