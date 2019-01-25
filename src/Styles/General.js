import React from 'react';
import styled from 'styled-components';

import { above } from './MediaQueries';





export const Fake = ({ className }) => <div className={className}><h2>Yo!</h2></div>;

export const Heading = styled.h1`
  margin: 0;
  padding: 15px;

  font-size: 3rem;
  ${above.small`
    color: blue;
  `}
`;

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

  &:hover {
    transform: scale(1.1);
  }
`;

export const AppWrapper = styled.div`
  padding: 15px;

  ${Button} {
    margin-left: 20px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

export const StyledFake = styled(Fake)` color: red;`;
