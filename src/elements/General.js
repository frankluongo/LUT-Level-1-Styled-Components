import React from 'react';
import styled, { css } from 'styled-components';

import { above } from '../utilities/Breakpoints';
import { space } from '../utilities/Variables';

// CSS Helper
// Useful for when you need to use a prop or variable value
const fixedTop = css`
  position: fixed;
  top: ${({ top }) => top + 'px'};
  left: 0;
`;

// This also works...
// const fixedTop2 = `
// position: fixed;
// top: 0;
// left: 0;
// `;



export const Fake = ({ className }) => <div className={className}><h2>Yo!</h2></div>;

export const Button = styled.button`
  padding: 15px 30px;

  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;

  background-color: white;
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const CancelButton = styled(Button)`
  background-color: tomato;

  /* ${fixedTop}; */

  &:hover {
    transform: scale(1.1);
  }
`;

export const AppWrapper = styled.div`
  padding: ${space('small')};

  ${above.small`
    padding: ${space('medium')};
  `}

  ${Button} {
    margin-left: 20px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

export const StyledFake = styled(Fake)` color: red;`;
