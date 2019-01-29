import React from 'react';
import styled from 'styled-components';
import { black, social } from '../utilities/Colors';
import elevation from '../utilities/Elevation';


const Header = ({ className }) => {
  return (
    <header className={className}>
      <img src="https://placekitten.com/200/200" alt="Kittens!" className="header__logo" />
    </header>
  )
}

// const AppHeader = styled.header`
//   padding: 15px;

//   border-bottom: 1px solid #ccc;

//   .header__logo {
//     width: 60px;
//   }
// `;

export default styled(Header)`
  padding: 15px;

  /* background-color: ${black}; */
  border-bottom: 2px solid ${social.twitter};

  ${elevation[1]};
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    ${elevation[2]};
  }

  .header__logo {
    width: 60px;
  }
`;
