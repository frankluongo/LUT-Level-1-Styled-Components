import styled from 'styled-components';

import { above } from '../utilities/Breakpoints';
import { space } from '../utilities/Variables';

export const Heading = styled.h1`
  margin: 0;
  padding: ${space('small')};

  font-size: 3rem;
  ${above.small`
    color: blue;
  `}
`;
