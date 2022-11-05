import React from 'react';

import { CardComponent, MainLayout, SectionContainer } from 'components';
import { SectionIdEnum } from 'types';
import { DormCustomSection, DormSampleSection } from 'sections';



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


const Sort = () => {
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

export default Sort;