import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import THEME from '../../constants';
import HorList from '../../partials/horizontal-list';

const ContentWrapper = styled.article`
  border: 1px solid rgb(236, 237, 243);
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: .5rem;

  &:hover {
    box-shadow: 0 4px 6px rgba(64, 70, 104, .03), 0 10px 15px rgba(64, 70, 104, .05);
    cursor: pointer;
  }

  .seat-icon {
    width: 20px;
  }

  ${(props) => (props.active && `
    background: aliceblue;
  `)}
`;

const ContentImageWrapper = styled.div`
`;

const ContentTitle = styled.h4`
  color: ${THEME.colors.grey[600]}
`;

const ContentDescription = styled.p`
  color: ${THEME.colors.grey[800]}
`;

const ContentImage = styled.img`
  max-width: 100px;
`;

const ContentBodyWrapper = styled.div`
  padding: 1.5rem;
  background-color: white;
`;

const TagLabel = styled.div`
  background-color: rgb(225, 239, 254);
  color: rgb(30, 66, 159);
  border-radius: 50%;
  font-size: .75rem;
  font-weight: 500;
  padding: 2px 10px;
  line-height: 16px;
`;

const VehicleListItem = ({
  name, imageLink, trip, tripType, totalSeats, availableSeats,
  selectVehicle, active,
}) => (
  <ContentWrapper type="button" onClick={selectVehicle} active={active}>
    <HorList>
      <ContentImageWrapper>
        <ContentImage src={imageLink} alt={name} />
      </ContentImageWrapper>
      <ContentBodyWrapper>
        <ContentTitle>
          {name}
        </ContentTitle>
        <HorList>
          <ContentDescription>
            {trip}
          </ContentDescription>
          <HorList>
            <img className="seat-icon" src="/images/caret.svg" alt="seats icon" />
            <p>
              {totalSeats}
              {' '}
              seats
            </p>
          </HorList>
        </HorList>
        <HorList spacing={20}>
          <TagLabel>
            {availableSeats}
            {' '}
            seats
          </TagLabel>
          <TagLabel>
            {trip}
          </TagLabel>
          <TagLabel>
            {tripType}
          </TagLabel>
        </HorList>
      </ContentBodyWrapper>
    </HorList>
  </ContentWrapper>
);

VehicleListItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  totalSeats: PropTypes.number.isRequired,
  trip: PropTypes.string.isRequired,
  availableSeats: PropTypes.number.isRequired,
  tripType: PropTypes.string.isRequired,
  selectVehicle: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default VehicleListItem;
