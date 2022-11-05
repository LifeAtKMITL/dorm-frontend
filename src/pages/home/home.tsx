import React from 'react';

import { MainLayout, SectionContainer } from 'components';
import { SectionIdEnum } from 'types';
import { DormCustomSection, DormSampleSection } from 'sections';
import NavBar from 'components/navbar';




const sections = [
  {
    sectionId: SectionIdEnum.dormCustom,
    component: <DormCustomSection />,
  },
  {
    sectionId: SectionIdEnum.dormSample,
    component: <DormSampleSection />,
  },
]

const Home = () => {
  return (
  <div>
    <MainLayout>
      {sections.map(({ component, sectionId }) => {
        return <SectionContainer sectionId={sectionId} key={sectionId}>
          {component}
        </SectionContainer>;
        
      })}

  </MainLayout>
  </div>
)};

export default Home;
