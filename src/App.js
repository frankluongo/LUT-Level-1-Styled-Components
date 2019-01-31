import React, { Component } from 'react';
import { AppWrapper, Heading, Button, StyledFake, Fake } from './elements';
import GlobalStyle from './elements/Global';
import Header from './layouts/Header';

// Install The Polish Library for color functions
// npm install --save polished


class App extends Component {
  render() {
    return (
      <>
      <Header />
      <AppWrapper>
        <Heading>Heading</Heading>
        <StyledFake />
        <Fake />
        <Button type="cancel" top="100">Button</Button>
        <Button type="save">Button</Button>
        <Button type="save" size="small">Button</Button>
        <GlobalStyle />
      </AppWrapper>
      </>
    );
  }
}

export default App;
