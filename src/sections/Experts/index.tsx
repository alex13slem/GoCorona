import {Link} from 'react-router-dom';
import {
  AchievementBoardItemUI,
  AchievementBoardUI,
  ButtonUI,
  TextUI,
  TitleUI,
} from '@/UI';
import {Container, Section} from './styled';

import {FC, HTMLAttributes} from 'react';

import boardData from '@/data/achievementBoard.json';
import {AchievementBoardDataType} from '@/types/data';

interface SectionExpertsProps extends HTMLAttributes<HTMLDivElement> {}

const SectionExperts: FC<SectionExpertsProps> = ({...props}) => {
  return (
    <Section {...props}>
      <Container>
        <AchievementBoardUI className="board">
          {boardData.map((itemData: AchievementBoardDataType) => (
            <AchievementBoardItemUI data={itemData} />
          ))}
        </AchievementBoardUI>

        <div className="block-text">
          <TitleUI $marker="blue">
            Talk to <span>experts.</span>
          </TitleUI>
          <TextUI as={'h3'}>
            Book appointments or submit queries into thousands of forums
            concerning health issues and prevention against noval Corona Virus.
          </TextUI>
          <ButtonUI as={Link} to="./">
            Features
          </ButtonUI>
        </div>
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dcJDpV-igjs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </Section>
  );
};

export default SectionExperts;
