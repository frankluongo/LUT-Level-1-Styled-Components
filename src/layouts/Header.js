import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <AppHeader>
      <img src="https://placekitten.com/200/200" alt="Kittens!" className="header__logo" />
    </AppHeader>
  )
}

const AppHeader = styled.header`
  padding: 15px;

  border-bottom: 1px solid #ccc;

  .header__logo {
    width: 60px;
  }
`;

export default Header;
