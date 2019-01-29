import styled from 'styled-components';

import { space } from '../utilities/Variables';
import { above } from '../utilities/Breakpoints';
import { Button } from './Buttons';

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
