import React from 'react';

import { MainLayout, SectionContainer } from 'components';
import { SectionIdEnum } from 'types';
import { DormDataSection, DormReviewSection } from 'sections';



const sections = [
  {
    sectionId: SectionIdEnum.dormData,
    component: <DormDataSection />,
  },
  {
    sectionId: SectionIdEnum.dormReview,
    component: <DormReviewSection />,
  },
]


const Dorm = () => {
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

export default Dorm;