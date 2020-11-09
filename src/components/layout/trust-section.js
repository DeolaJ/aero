import React from 'react';
import styled from '@emotion/styled';
import Section from '../section';
import ContentCarousel from '../content-carousel';
import ListItem from '../list-item';
import LogoSection from '../logo-section';

const TrustSectionWrapper = styled.div`
`;

const TrustSectionContentWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const TrustSectionContentMobile = styled.div`

  @media (min-width: 768px) {
    display: none;
  }
`;

const TrustSection = () => {
  const contentList = [
    {
      id: 1,
      title: 'Random',
      text: 'lorem ipsum jfos odis osidfs oin osndosd oinson',
    },
    {
      id: 2,
      title: 'Random',
      text: 'lorem ipsum jfos odis osidfs oin osndosd oinson',
    },
    {
      id: 3,
      title: 'Random',
      text: 'lorem ipsum jfos odis osidfs oin osndosd oinson',
    },
  ];

  return (
    <TrustSectionWrapper>
      <Section
        title="Why us?"
      >
        <TrustSectionContentWrapper>
          {
            contentList.map((content) => (
              <ListItem
                key={content.id}
                type="trust"
                content={content}
              />
            ))
          }
        </TrustSectionContentWrapper>
        <TrustSectionContentMobile>
          <ContentCarousel
            items={contentList}
            resultsPerView={1}
            type="header"
          />
        </TrustSectionContentMobile>
        <LogoSection />
      </Section>
    </TrustSectionWrapper>
  );
};

export default TrustSection;
