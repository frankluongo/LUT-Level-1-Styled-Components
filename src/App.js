import React, { Component } from 'react';
import { AppWrapper, Heading, Button, CancelButton, StyledFake, Fake } from './elements';
import GlobalStyle from './elements/Global';
import Header from './layouts/Header';



class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Heading>Heading</Heading>
        <StyledFake />
        <Fake />
        <CancelButton type="cancel" top="100">Button</CancelButton>
        <Button type="save">Button</Button>
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

export default App;
