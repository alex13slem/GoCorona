import styled from 'styled-components';

export const DecorItemUI = styled.div<{$size?: string}>`
  ${({$size = '65px'}) => `--size: ${$size};`}

  position: absolute;
  width: var(--size);
  height: var(--size);

  background: #ec5863;
  border-radius: calc(var(--size) / 4);
`;
