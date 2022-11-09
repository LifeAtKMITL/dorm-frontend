import React from 'react';

import { MainLayout, SectionContainerSort } from 'components';
import { SectionIdEnum } from 'types';
import { SortSectionComponent } from 'sections';



const sections = [
  {
    sectionId: SectionIdEnum.dormSort,
    component: <SortSectionComponent />,
  },
]


const Sort = () => {
  return (
  <div>
    <MainLayout>
      {sections.map(({ component, sectionId }) => {
        return <SectionContainerSort sectionId={sectionId} key={sectionId}>
          {component}
        </SectionContainerSort>;
        
      })}

  </MainLayout>
  </div>
)};

export default Sort;