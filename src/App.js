import React, { Component } from 'react';
import { AppWrapper, Heading, Button, CancelButton, StyledFake, Fake } from './Styles/Components/General';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Heading>Heading</Heading>
        <StyledFake />
        <Fake />
        <CancelButton type="cancel" top="100">Button</CancelButton>
        <Button type="save">Button</Button>
      </AppWrapper>
    );
  }
}

export default App;
