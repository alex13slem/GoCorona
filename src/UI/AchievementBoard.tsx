import {FC, HTMLAttributes} from 'react';
import styled from 'styled-components';
import {DecorItemUI} from '.';

interface AchievementBoardUIProps extends HTMLAttributes<HTMLDivElement> {}

const Root = styled.div`
  position: relative;
  width: fit-content;
  margin-inline: auto;
  margin-bottom: 36px;
  padding: 44px 60px;

  @media (max-width: 767.98px) {
    padding: 44px 0;
  }

  .body {
    z-index: 1;
    position: relative;

    display: flex;
    gap: 70px;
    flex-wrap: wrap;
    padding: 30px 80px;

    background-color: #ffffff;
    box-shadow: 0px 2px 24px rgba(88, 126, 236, 0.15);
    border-radius: 16px;

    @media (max-width: 991.98px) {
      flex-direction: column;
      gap: 0;
      padding: 20px 34px;
    }

    @media (max-width: 767.98px) {
      box-shadow: 0px 2px 24px rgba(88, 126, 236, 0.15), #ec5863 20px -15px;
      border-radius: 30px;
    }
  }

  .el1 {
    transform: rotate(-30deg);
    bottom: 26px;
    left: 28px;

    @media (max-width: 767.98px) {
      display: none;
    }
  }

  .el2 {
    right: calc(50% + 16px);
    top: 6px;
    transform: rotate(105deg);

    @media (max-width: 991.98px) {
      right: 16px;
    }

    @media (max-width: 767.98px) {
      display: none;
    }
  }

  .el3 {
    right: 12px;
    top: calc(var(--size) - 50% + 16px);
    transform: rotate(-30deg);

    @media (max-width: 991.98px) {
      display: none;
    }
  }
`;

export const AchievementBoardUI: FC<AchievementBoardUIProps> = ({
  children,
  ...props
}) => {
  return (
    <Root {...props}>
      <div className="body">{children}</div>
      <DecorItemUI className="el1" $size="65px" />
      <DecorItemUI className="el2" $size="97px" />
      <DecorItemUI className="el3" $size="128px" />
    </Root>
  );
};
