import React from 'react';
// import { Link } from 'next/link';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContentWrapper = styled.article`

`;

const ContentTitle = styled.h4`

`;

const ContentNumber = styled.div`

`;

const ContentDescription = styled.p`

`;

const ContentImage = styled.img`

`;

const ContentSubtext = styled.p`
  font-style: italic;
`;

const ContentButton = styled.button``;

const ListItem = ({
  type, content,
}) => {
  switch (type) {
    case 'header': {
      return (
        <ContentWrapper>
          <ContentNumber>
            dfkndnkf
          </ContentNumber>
          <ContentTitle>
            {content && content.title}
          </ContentTitle>
          <ContentDescription>
            {content && content.text}
          </ContentDescription>
          <ContentSubtext>
            jfdodifoif
          </ContentSubtext>
          <ContentButton>
            Here
          </ContentButton>
        </ContentWrapper>
      );
    }

    case 'howto': {
      return (
        <ContentWrapper>
          <ContentImage src="" alt="" />
          <ContentTitle>
            {content && content.title}
          </ContentTitle>
          <ContentDescription>
            {content && content.text}
          </ContentDescription>
          <ContentSubtext>
            jfdodifoif
          </ContentSubtext>
          <ContentButton>
            Here
          </ContentButton>
        </ContentWrapper>
      );
    }

    case 'trust': {
      return (
        <ContentWrapper>
          <ContentImage src="" alt="" />
          <ContentTitle>
            {content && content.title}
          </ContentTitle>
          <ContentDescription>
            {content && content.text}
          </ContentDescription>
          <ContentSubtext>
            jfdodifoif
          </ContentSubtext>
          <ContentButton>
            Here
          </ContentButton>
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
