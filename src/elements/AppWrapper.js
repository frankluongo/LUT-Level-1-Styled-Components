import styled from 'styled-components';

import { Button } from './Buttons';

export const AppWrapper = styled.div`

  ${Button} {
    margin-left: 20px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;
