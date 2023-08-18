import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const SiteLogoUI = styled(Link)`
  display: flex;
  align-items: center;
  z-index: 40;
  @media (max-width: 478.98px) {
    flex: 0 0 69px;
    overflow: hidden;
  }
`;
