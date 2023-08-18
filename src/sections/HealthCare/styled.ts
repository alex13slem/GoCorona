import {ContainerUI} from '@/UI';
import {styled} from 'styled-components';

export const Container = styled(ContainerUI)`
  padding-block: 80px;

  .title {
    text-align: center;
  }
  .description {
    margin: 14px auto 0;
    max-width: 600px;
    text-align: center;
  }
  .cards-block {
    margin-top: 45px;
  }
`;
