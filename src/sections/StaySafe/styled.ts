import {styled} from 'styled-components';
import {ContainerUI} from '@/UI';

export const Container = styled(ContainerUI)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-block: 80px;
  @media (max-width: 991.98px) {
    flex-direction: column;
    padding-block: 50px;
  }

  .main {
    max-width: 380px;
    margin-top: 50px;
  }
`;
