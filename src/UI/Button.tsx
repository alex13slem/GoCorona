import styled from 'styled-components';

interface ButtonUIProps {
  $color?: 'red' | 'blue';
}

export const ButtonUI = styled.button<ButtonUIProps>`
  display: inline-block;

  font-family: 'Raleway';
  font-weight: 800;
  font-size: 10px;
  line-height: 1.5em;
  padding: 1.25em 3em;
  letter-spacing: 0.14em;
  text-align: center;
  color: #fcfdfe;

  border-radius: 0.5em;
  text-decoration: none;
  cursor: pointer;

  transition: background-color 0.3s ease;

  ${({$color = 'red'}) =>
    ($color === 'blue' &&
      `
      background-color: #4285f4;
      &:hover {
        background-color: #5795f8;
      }
    `) ||
    ($color === 'red' &&
      `
    
      background-color: #ec5863;
      &:hover {
        background-color: #e06f77;
      }
    `)}
`;
