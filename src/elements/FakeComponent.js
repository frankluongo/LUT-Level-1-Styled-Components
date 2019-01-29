import React from 'react';
import styled from 'styled-components';

export const Fake = ({ className }) => <div className={className}><h2>Yo!</h2></div>;
export const StyledFake = styled(Fake)` color: red;`;
