import {ContainerUI} from '@/UI';
import styled from 'styled-components';

export const Section = styled.section`
  background: #fafbfd;

  .board {
    grid-area: brd;
  }

  .block-text {
    grid-area: txt;
    max-width: 365px;
    @media (max-width: 991.98px) {
      margin-bottom: 56px;
    }
  }

  .video {
    width: 100%;
    max-width: 500px;
    aspect-ratio: 16 / 9;
    grid-area: vid;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Container = styled(ContainerUI)`
  padding-block: 110px;

  display: grid;
  grid-template-areas:
    'brd brd'
    'txt vid';
  align-items: center;

  @media (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
    padding-block: 80px;
  }
`;
