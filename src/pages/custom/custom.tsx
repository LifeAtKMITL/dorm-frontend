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


const Custom = () => {
  return (
  <div>
    <MainLayout>
      <h4>Custom Page Ai Pat</h4>
      <h4>Custom Page Ai Pat</h4>
      <h4>Custom Page Ai Pat</h4>
      <h4>Custom Page Ai Pat</h4>
      <h4>Custom Page Ai Pat</h4>
      <h4>Custom Page Ai Pat</h4>

  </MainLayout>
  </div>
)};

export default Custom;