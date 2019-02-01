import React, { Component } from 'react';
import { AppWrapper, Heading, Button, StyledFake, Fake } from './elements';
import GlobalStyle from './elements/Global';
import Header from './layouts/Header';
import { Card } from './elements/Cards';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    red: '#e60000',
    blue: '#3ec9ef',
    black: '#212121',
    white: '#f1f1f1'
  }
};

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
