import styled from 'styled-components';

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
