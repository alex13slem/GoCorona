import styled from 'styled-components';

export const SiteNavigateUI = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  gap: 20px;

  &.visible {
    left: 0;
  }

  @media (max-width: 991.98px) {
    gap: 10px;
  }

  @media (max-width: 767.92px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 90px 15px 30px 15px;
  }
  @media (max-width: 767.92px) {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #fafbfd;
    transition: left 0.3s ease;
    &:target {
      left: 0;
    }
  }
`;
