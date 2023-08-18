import {FC, HTMLAttributes} from 'react';
import styled from 'styled-components';
import {ContainerUI} from '.';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const StyledContainer = styled(ContainerUI)`
  min-height: 100px;
  padding-block: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 55px;
  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`;

export const FooterUI: FC<Props> = ({children, ...props}) => {
  return (
    <footer {...props}>
      <StyledContainer>{children}</StyledContainer>
    </footer>
  );
};
