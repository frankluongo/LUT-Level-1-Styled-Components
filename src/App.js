import React, { Component } from 'react';
import { AppWrapper, Button, CancelButton, StyledFake, Fake } from './elements/General';
import { Heading } from './elements';
import GlobalStyle from './elements/Global';

// Example Folder Structure from the Course
/*

  src
    elements
      html elements go in here, things like paragraph tags, h1, etc.
      Also, "new" HTML elements could go here, cards, grid layouts, etc.
      examples:
      - Headings.js
    utilities
      Mixins, functions, breakpoints
*/



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
