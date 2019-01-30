import styled from 'styled-components';

import { above } from '../utilities/Breakpoints';
import { space } from '../utilities/Variables';
import { serif } from '../utilities/Type';

export const Heading = styled.h1`
  margin: 0;
  padding: ${space('small')};

  ${serif};

  font-size: 3rem;
  ${above.small`
    color: blue;
  `}
`;
