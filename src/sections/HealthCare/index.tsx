import cardsData from '@/data/cardsBlock.json';
import {CardUI, CardsBlockUI, TextUI, TitleUI} from '@/UI';
import {FC, HTMLAttributes} from 'react';
import {Container} from './styled';

interface SectionHealthCareProps extends HTMLAttributes<HTMLDivElement> {}

const SectionHealthCare: FC<SectionHealthCareProps> = ({...props}) => {
  return (
    <section {...props}>
      <Container>
        <TitleUI className={'title'} $marker="red">
          <span>Healthcare</span> at your Fingertips.
        </TitleUI>
        <TextUI className={'description'}>
          Bringing premium healthcare features to your fingertips. User friendly
          mobile platform to bring healthcare to your fingertips. Signup and be
          a part of the new health culture.
        </TextUI>
        <CardsBlockUI className="cards-block">
          {cardsData.map(({id, img, title, body}) => (
            <CardUI key={id}>
              <img className="image" src={img} alt={title} />
              <div className="title">{title}</div>
              <div className="text">{body}</div>
            </CardUI>
          ))}
        </CardsBlockUI>
      </Container>
    </section>
  );
};

export default SectionHealthCare;
