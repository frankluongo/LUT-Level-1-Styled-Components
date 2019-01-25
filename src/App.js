import React, { Component } from 'react';
import { AppWrapper, Heading, Button, CancelButton, StyledFake, Fake } from './Styles/General';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header>Header</header>
        <Heading>Heading</Heading>
        <StyledFake />
        <Fake />
        <CancelButton type="cancel">Button</CancelButton>
        <Button type="save">Button</Button>
      </AppWrapper>
    );
  }
}

export default App;
