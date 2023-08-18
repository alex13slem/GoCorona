import {FC, HTMLAttributes} from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  handleClick: (inVisible: boolean) => void;
  isVisible: boolean;
}

const Btn = styled.button`
  display: none;

  @media (max-width: 767.92px) {
    display: flex;
    position: relative;
    flex: 0 0 30px;
    height: 18px;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;

    span,
    &::before,
    &::after {
      content: '';
      background: #000;
      height: 2px;
      width: 100%;
    }
  }
`;

export const BurgerBtnUI: FC<Props> = ({handleClick, isVisible, ...props}) => {
  return (
    <Btn {...props} onClick={() => handleClick(!isVisible)}>
      <span></span>
    </Btn>
  );
};
