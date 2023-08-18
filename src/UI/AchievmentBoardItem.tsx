import {FC, HTMLAttributes} from 'react';
import {styled} from 'styled-components';
import {AchievementBoardDataType} from '../types/data/AchievementBoardData';

interface AchievementBoardItemUIProps extends HTMLAttributes<HTMLDivElement> {
  data: AchievementBoardDataType;
}

const Root = styled.article`
  font-weight: 700;
  @media (max-width: 991.98px) {
    margin-bottom: 10px;
  }

  .value {
    text-align: center;
    font-size: 36px;
    letter-spacing: 0.14em;
    color: #ec5863;
  }

  .title {
    text-align: center;
    font-size: 11px;
    letter-spacing: 0.37em;
    text-transform: uppercase;
    color: #000000;
  }
`;

export const AchievementBoardItemUI: FC<AchievementBoardItemUIProps> = ({
  data,
}) => {
  return (
    <Root key={data.id}>
      <p className="value">{data.firStr}</p>
      <p className="title">{data.secStr}</p>
    </Root>
  );
};
