import {FC, HTMLAttributes} from 'react';
import styled from 'styled-components';
import {DecorItemUI} from '.';

interface CardsBlockProps extends HTMLAttributes<HTMLDivElement> {}

const Root = styled.div`
  position: relative;
  .body {
    position: relative;
    display: flex;
    z-index: 1;
    justify-content: space-around;
    margin: 0 auto;
    @media (max-width: 991.98px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .image {
    width: 72px;
    margin-bottom: 58px;
  }

  .title {
    font-weight: 700;
    font-size: 16px;
    line-height: 138.5%;
    /* or 22px */
    text-align: center;
    letter-spacing: 0.08em;
    color: #000000;
  }

  .text {
    /* width: 86%; */
    line-height: 138.5%;
    /* or 17px */
    text-align: center;
    letter-spacing: 0.08em;
    color: #616161;
  }

  .el1 {
    left: 15px;
    bottom: -35px;
    transform: rotate(-30deg);

    @media (max-width: 1087px) {
      left: -20px;
    }
    @media (max-width: 991.98px) {
      top: -20px;
      left: 185px;
    }
    @media (max-width: 767.98px) {
      display: none;
    }
  }
  .el2 {
    left: 265px;
    bottom: 130px;
    transform: rotate(105deg);
    @media (max-width: 1087px) {
      left: 230px;
    }
    @media (max-width: 991.98px) {
      top: 285px;
      left: 450px;
    }
    @media (max-width: 767.98px) {
      display: none;
    }
  }
  .el3 {
    left: 618px;
    bottom: -10px;
    transform: rotate(-30deg);
    @media (max-width: 1087px) {
      left: 560px;
    }
    @media (max-width: 991.98px) {
      bottom: 295px;
      left: 145px;
    }
    @media (max-width: 767.98px) {
      display: none;
    }
  }
  .el4 {
    right: 20px;
    bottom: 240px;
    transform: rotate(-30deg);
    @media (max-width: 1087px) {
      right: -20px;
    }
    @media (max-width: 991.98px) {
      bottom: 35px;
      right: 180px;
    }
    @media (max-width: 767.98px) {
      display: none;
    }
  }
`;

export const CardsBlockUI: FC<CardsBlockProps> = ({children, ...props}) => {
  return (
    <Root {...props}>
      <div className="body">{children}</div>

      <DecorItemUI className={'el1'} $size={'66px'} />
      <DecorItemUI className={'el2'} $size="97px" />
      <DecorItemUI className={'el3'} $size={'128px'} />
      <DecorItemUI className={'el4'} $size={'66px'} />
    </Root>
  );
};
