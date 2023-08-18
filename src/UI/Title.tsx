import {styled} from 'styled-components';

interface TitleUIProps {
  $marker?: 'red' | 'blue';
}

const defaultProps: TitleUIProps = {
  $marker: 'red',
};

export const TitleUI = styled.h2<TitleUIProps>`
  font-family: 'Rubik';
  font-weight: 700;
  font-size: 44px;
  line-height: 126%;
  color: #000000;
  margin-bottom: 12px;
  ${({$marker = 'red'}) =>
    ($marker === 'red' &&
      `
      span { color: #ec5863; }
    `) ||
    ($marker === 'blue' &&
      `
      span { color: #4285f4; }
    `)}
`;
