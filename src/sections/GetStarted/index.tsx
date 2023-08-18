import {Link} from 'react-router-dom';
import {SVGDoctorAndGirl} from '@/assets/SVG/SVGDoctorAndGirl';
import {BtnVideoTriggerUI, ButtonUI, TextUI, TitleUI} from '@/UI';
import {Section, Container} from './styled';
import {FC, HTMLAttributes} from 'react';

interface SectionGetStartedProps extends HTMLAttributes<HTMLDivElement> {}

const SectionGetStarted: FC<SectionGetStartedProps> = ({...props}) => {
  return (
    <Section {...props}>
      <Container>
        <div className="content">
          <TitleUI as={'h1'} $marker="blue">
            Take care of yours family's
            <span> health.</span>
          </TitleUI>
          <TextUI>
            All in one destination for COVID-19 health queries. <br /> Consult
            10,000+ health workers about your concerns.
          </TextUI>
          <ButtonUI as={Link} to={'./'}>
            GET STARTED
          </ButtonUI>
        </div>
        <SVGDoctorAndGirl className="image" />
        <BtnVideoTriggerUI className="video-trigger" />
      </Container>
    </Section>
  );
};

export default SectionGetStarted;
