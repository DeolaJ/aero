import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Button } from './button';
import THEME from '../constants';
import HorList from '../partials/horizontal-list';

const ContentWrapper = styled.article`
  ${(props) => (props.type === 'trust' && `
    box-shadow: 0px 10px 34px 0px rgba(0, 23, 44, 0.1);
    padding: .875rem;
    border-radius: 1rem;
  `)}

  ${(props) => (props.type === 'deals' && `
    box-shadow: 0px 4px 11px 0px rgba(0, 23, 44, 0.1);
    border-radius: 3px;
    max-width: 350px;

    img {
      width: 100%;
    }

    + article {
      margin-top: 2rem;
    }
  `)}
`;

const ContentImageWrapper = styled.div`
  padding: 1.2rem;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  background-color: white;
`;

const ContentTitle = styled.h4`
  color: ${THEME.colors.grey[600]}
`;

const ContentAuthor = styled.p`
  text-align: right;
  margin-bottom: 0;
`;

const ContentDescription = styled.p`
  color: ${THEME.colors.grey[800]}
`;

const ContentImage = styled.img`
  width: 50px;
`;

const ContentBodyWrapper = styled.div`
  padding: 1.5rem;
  background-color: white;
`;

const ListItem = ({
  type, content,
}) => {
  switch (type) {
    case 'about-us': {
      return (
        <ContentWrapper>
          <ContentImageWrapper>
            <ContentImage src={content.imageLink} alt={content.title} />
          </ContentImageWrapper>
          <ContentTitle>
            {content.title}
          </ContentTitle>
          <ContentDescription>
            {content.text}
          </ContentDescription>
        </ContentWrapper>
      );
    }

    case 'deals': {
      const scrollToBooking = () => {
        if (typeof window !== 'undefined') {
          // eslint-disable-next-line no-undef
          const booking = document.querySelector('.bookings');
          booking.scrollIntoView({
            behavior: 'smooth',
          });
        }
      };
      return (
        <ContentWrapper type={type}>
          <ContentImage src={content.imageLink} alt={content.text} />
          <ContentBodyWrapper>
            <HorList>
              <ContentDescription>
                {content.text}
              </ContentDescription>
              <Button
                type="secondary"
                text="Book now"
                onClick={scrollToBooking}
              />
            </HorList>
          </ContentBodyWrapper>
        </ContentWrapper>
      );
    }

    case 'trust': {
      return (
        <ContentWrapper type={type}>
          <ContentImage src="/images/quotes.svg" alt="Quotes" />
          <ContentTitle>
            {content.text}
          </ContentTitle>
          <ContentAuthor>
            <strong>
              {content.author}
            </strong>
          </ContentAuthor>
        </ContentWrapper>
      );
    }

    default: return null;
  }
};

ListItem.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string, PropTypes.number, PropTypes.array,
    ]),
  ).isRequired,
};

export default ListItem;
