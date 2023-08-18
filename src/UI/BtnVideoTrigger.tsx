import {FC, HTMLAttributes} from 'react';
import styled, {WebTarget} from 'styled-components';
import {SVGIconVideo} from '../assets/SVG/SVGIconVideo';

interface BtnVideoTriggerUIProps extends HTMLAttributes<HTMLButtonElement> {
  as?: void | WebTarget;
  title?: string;
}

const BtnVideoTriggerTextUI = styled.p`
  font-size: 9px;
  line-height: 126%;
  /* or 11px */
  letter-spacing: 0.165em;
  text-transform: uppercase;
  color: #000000;
`;

const BtnVideoTriggerTitleUI = styled.p`
  font-size: 13px;
  line-height: 126%;
  /* or 16px */
  letter-spacing: 0.08em;
  color: #b0b0b0;
`;

const BtnVideoTriggerRootUI = styled.button`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 12px;

  .body {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  font-family: 'Rubik', sans-serif;

  cursor: pointer;
  & > svg {
    circle,
    path {
      transition: stroke 0.3s ease;
    }
  }
  &:hover {
    & > svg {
      circle,
      path {
        stroke: #ec5863;
      }
    }
    ${BtnVideoTriggerTitleUI} {
      color: #ec5863;
    }
  }

  svg {
    grid-area: btn;
  }

  ${BtnVideoTriggerTitleUI} {
    grid-area: title;
  }

  ${BtnVideoTriggerTextUI} {
    grid-area: watch;
  }
`;

export const BtnVideoTriggerUI: FC<BtnVideoTriggerUIProps> = ({
  title = 'Title',
  ...props
}) => {
  return (
    <BtnVideoTriggerRootUI {...props}>
      <SVGIconVideo />
      <div className="body">
        <BtnVideoTriggerTitleUI>{title}</BtnVideoTriggerTitleUI>
        <BtnVideoTriggerTextUI>Watch Video</BtnVideoTriggerTextUI>
      </div>
    </BtnVideoTriggerRootUI>
  );
};
