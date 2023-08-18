import {FC, HTMLAttributes} from 'react';

import styled from 'styled-components';

import {useDocumentTitle} from '@/hooks';

import SectionGetStarted from '@/sections/GetStarted';
import SectionStaySafe from '@/sections/StaySafe';
import SectionExperts from '@/sections/Experts';
import SectionHealthCare from '@/sections/HealthCare';

interface HomeProps extends HTMLAttributes<HTMLDivElement> {}

const Main = styled.main``;

const Home: FC<HomeProps> = ({...props}) => {
  useDocumentTitle('alex13slem | GoCorona');

  return (
    <Main {...props}>
      <SectionGetStarted />
      <SectionStaySafe />
      <SectionExperts />
      <SectionHealthCare />
    </Main>
  );
};
export default Home;
