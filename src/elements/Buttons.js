import styled from 'styled-components';
import elevation from '../utilities/Elevation';

const buttonSize = ({size}) => {
  let btnSizeProps;

  switch (size) {
    case 'small':
    btnSizeProps = `
      font-size: 12px;
      padding: 5px 20px;
    `;
    break;
    default:
    btnSizeProps = `
      padding: 15px 30px;
      font-size: 1.2rem;
    `;
  }

  return btnSizeProps;
}

const buttonType = ({ type }) => {
  let btnTypeProps;

  switch (type) {
    case 'cancel':
    btnTypeProps = `
    color: white;

    background-color: tomato;
    border: 1px solid tomato;
    `;
    break;
    default:
    btnTypeProps = `
      color: #333;
      background-color: white;
      border: 1px solid #ccc;
    `;
  }

  return btnTypeProps;
}

export const Button = styled.button`
  ${buttonSize.bind(this)};
  ${buttonType.bind(this)};


  font-weight: bold;
  text-transform: uppercase;

  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${elevation[1]};

  &:hover {
    transform: scale(1.1);
    ${elevation[2]};
  }
`;
