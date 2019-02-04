import React, { Component } from 'react';
import { AppWrapper, Heading, Button, StyledFake, Fake } from './elements';
import GlobalStyle from './elements/Global';
import Header from './layouts/Header';
import { Card } from './elements/Cards';
import styled from 'styled-components/macro';

// CSS Prop
// npm install --save-dev babel-plugin-styled-components babel-plugin-macros

class App extends Component {
  render() {
    return (
        <>
        <Header />
        <AppWrapper>
          <Heading>Heading</Heading>
          <div
            css={`
            padding: 15px;
            margin-bottom: 15px;
            background-color: red;
            `}
          >
            Hello
          </div>
          <Card>
            <p>This is a card</p>
            <Card.Button as="a" modifiers={['typeStandard', 'sizeDefault']}>Button</Card.Button>
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
