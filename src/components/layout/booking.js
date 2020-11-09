import { useState } from 'react';
import styled from '@emotion/styled';
import Section from '../section';
import HorList from '../../partials/horizontal-list';
import { ButtonText } from '../button';
import BookSeat from '../book-seat';
import HireBus from '../hire-bus';
import CheckStatus from '../check-status';
import THEME from '../../constants';

const BookingWrapper = styled.div`
  margin-top: -4rem;
  padding: 0;

  > section {
    padding: 2rem 1rem;
  }

  @media (min-width: 768px) {
    margin-top: -9rem;
    padding: 4rem;

    > section {
      padding: 2rem;
      box-shadow: 0 25px 50px rgba(64, 70, 104, .1);
    }
  }

  h3 {
    margin-top: 0;
  }


`;

const BookingTabButton = styled(ButtonText)`
  text-transform: uppercase;
  font-size: 1.125rem;
  padding: 1rem .3rem;

  ${(props) => (props.active && `
    border-bottom: 4px solid ${THEME.colors.brand.rose};
  `)}

  @media (min-width: 768px) {
    flex: 0 0 30%;
    padding: 1rem 2rem;
  }
`;

const BookingBody = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  display: block;

  > * + * {
    margin-top: 1rem;
  }
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > * + * {
      margin-top: 0;
      margin-left: 1rem;
    }
  }
`;

const Booking = () => {
  const [tab, setTab] = useState('book-seat');

  return (
    <BookingWrapper>
      <Section
        backgroundColor="white"
      >
        <h3>
          Book your next remote journey
        </h3>
        <HorList>
          <BookingTabButton
            type="default"
            onClick={() => (setTab('book-seat'))}
            active={tab === 'book-seat'}
          >
            <span className="mobile">
              Book
            </span>
            <span className="hide-on-mobile">
              Book a seat
            </span>
          </BookingTabButton>
          <BookingTabButton
            type="default"
            onClick={() => (setTab('hire-bus'))}
            active={tab === 'hire-bus'}
          >
            <span className="mobile">
              Hire
            </span>
            <span className="hide-on-mobile">
              Hire a bus
            </span>
          </BookingTabButton>
          <BookingTabButton
            type="default"
            onClick={() => (setTab('check-status'))}
            active={tab === 'check-status'}
          >
            <span className="mobile">
              Status
            </span>
            <span className="hide-on-mobile">
              Booking status
            </span>
          </BookingTabButton>
        </HorList>
        <BookingBody>
          {
            tab === 'book-seat' && (
              <BookSeat />
            )
          }

          {
            tab === 'hire-bus' && (
              <HireBus />
            )
          }

          {
            tab === 'check-status' && (
              <CheckStatus />
            )
          }
        </BookingBody>
      </Section>
    </BookingWrapper>
  );
};

export default Booking;
