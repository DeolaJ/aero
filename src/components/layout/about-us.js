import React from 'react';
// import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Section from '../section';
import ContentCarousel from '../content-carousel';
import ListItem from '../list-item';
import { Button } from '../button';

const AboutUsWrapper = styled.div`
`;

const AboutUsContentWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const AboutUsContentMobile = styled.div`

  @media (min-width: 768px) {
    display: none;
  }
`;

const AboutUs = () => {
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
    {
      id: 4,
      title: 'Random',
      text: 'lorem ipsum jfos odis osidfs oin osndosd oinson',
    },
  ];

  return (
    <AboutUsWrapper>
      <Section
        miniHeader
        title="Special title"
        subTitle="This is a random subtitle"
      >
        <AboutUsContentWrapper>
          {
            contentList.map((content) => (
              <ListItem
                key={content.id}
                type="header"
                content={content}
              />
            ))
          }
        </AboutUsContentWrapper>
        <AboutUsContentMobile>
          <ContentCarousel
            items={contentList}
            resultsPerView={1}
            type="header"
          />
        </AboutUsContentMobile>
        <Button
          type="primary"
          text="Search for flight"
        />
      </Section>
    </AboutUsWrapper>
  );
};

AboutUs.propTypes = {

};

export default AboutUs;
