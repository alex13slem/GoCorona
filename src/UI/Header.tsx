import styled from 'styled-components';
import {HTMLAttributes, forwardRef} from 'react';
import {ContainerUI} from '.';

const Root = styled.header`
  z-index: 50;

  position: fixed;
  top: 0;
  width: 100%;
`;

const Container = styled(ContainerUI)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 114px;
  @media (max-width: 991.98px) {
    min-height: 80px;
  }
`;

export const HeaderUI = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({children, ...props}, ref) => {
  return (
    <Root ref={ref} {...props}>
      <Container>{children}</Container>
    </Root>
  );
});
