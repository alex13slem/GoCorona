import {FC, HTMLAttributes} from 'react';
import {ButtonUI, TextUI, TitleUI} from '../../UI';
import {Container} from './styled';
import {Link} from 'react-router-dom';

interface SectionStaySafeProps extends HTMLAttributes<HTMLDivElement> {}

const SectionStaySafe: FC<SectionStaySafeProps> = ({...props}) => {
  return (
    <section {...props}>
      <Container>
        <div className="image">
          <img src="sections/stay-safe/image.png" alt="Stay Safe" />
        </div>
        <div className="main">
          <TitleUI>
            Stay safe with Go<span>Corona.</span>
          </TitleUI>
          <TextUI>
            24x7 Support and user friendly mobile platform to bring healthcare
            to your fingertips. Signup and be a part of the new health culture.
          </TextUI>
          <ButtonUI as={Link} to={'./'}>
            Features
          </ButtonUI>
        </div>
      </Container>
    </section>
  );
};

export default SectionStaySafe;
