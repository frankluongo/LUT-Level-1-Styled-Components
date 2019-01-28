import React, { Component } from 'react';
import { AppWrapper, Heading, Button, CancelButton, StyledFake, Fake } from './Styles/Components/General';
import GlobalStyle from './Styles/Global/Global';

class App extends Component {
  render() {
    return (
      <AppWrapper>
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
