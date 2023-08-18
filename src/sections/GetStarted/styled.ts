import {ContainerUI} from '@/UI';
import styled from 'styled-components';

export const Section = styled.section`
  background: #fafbfd;
  overflow: hidden;

  .content {
    z-index: 2;
    position: relative;
    margin-top: 90px;
    grid-area: c;
  }

  .image {
    z-index: 1;
    grid-area: i;

    @media (max-width: 991.98px) {
      position: absolute;
      opacity: 0.3;
      right: 0;
      top: 0;
    }
  }

  .video-trigger {
    margin-top: 60px;
    grid-area: v;
  }
`;

export const Container = styled(ContainerUI)`
  padding-top: 150px;
  padding-bottom: 50px;
  position: relative;
  display: grid;
  grid-template-areas:
    'c i'
    'v v';

  &::before {
    position: absolute;
    content: '';
    background: #ec5863;
    border-radius: 30px 0px 0px 30px;
    width: 100vw;
    height: 100%;
    top: 0;
    right: 275px;
    transform: translate(100%);
    @media (max-width: 991.98px) {
      display: none;
    }
  }
`;
