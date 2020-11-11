/* eslint-disable max-lines-per-function */
import { useState } from 'react';
import styled from '@emotion/styled';
// import { useRouter } from 'next/router';
import { Button } from '../src/components/button';
import Body from '../src/components/layout/body';
import Section from '../src/components/section';
import VehicleListItem from '../src/components/layout/vehicle-list-item';

const BookingsWrapper = styled.div`

  > section {
    padding-top: 8rem;
    padding-bottom: 10rem;
  }
`;

const VehicleSelectWrapper = styled.div`
  margin: 2rem 0;
`;

const Bookings = () => {
  const [activeVehicle, setActiveVehicle] = useState(-1);
  // Router details
  // const router = useRouter();
  // const { bookingdetails } = router.query;

  const availableVehicles = [
    {
      id: 0,
      name: 'Hilux',
      imageLink: '/images/logo.png',
      trip: 'Lagos - Asaba',
      tripType: 'Flight',
      totalSeats: 25,
      avalialbleSeats: 5,
    },
    {
      id: 1,
      name: 'Boeing',
      imageLink: '/images/logo.png',
      trip: 'Lagos - Abuja',
      tripType: 'Flight',
      totalSeats: 35,
      avalialbleSeats: 1,
    },
    {
      id: 2,
      name: 'Hilux',
      imageLink: '/images/logo.png',
      trip: 'Lagos - PH',
      tripType: 'Bus',
      totalSeats: 14,
      avalialbleSeats: 2,
    },
    {
      id: 3,
      name: 'Toyota',
      imageLink: '/images/logo.png',
      trip: 'Lagos - Asaba',
      tripType: 'Bus',
      totalSeats: 30,
      avalialbleSeats: 10,
    },
    {
      id: 4,
      name: 'Hilux',
      imageLink: '/images/logo.png',
      trip: 'Lagos - Asaba',
      tripType: 'Flight',
      totalSeats: 20,
      avalialbleSeats: 5,
    },
    {
      id: 5,
      name: 'Hilux Prado',
      imageLink: '/images/logo.png',
      trip: 'Lagos - Asaba',
      tripType: 'Flight',
      totalSeats: 25,
      avalialbleSeats: 5,
    },
    {
      id: 6,
      name: 'Hilux',
      imageLink: '/images/logo.png',
      trip: 'Lagos - Asaba',
      tripType: 'Flight',
      totalSeats: 25,
      avalialbleSeats: 11,
    },
    {
      id: 7,
      name: 'Dana',
      imageLink: '/images/logo.png',
      trip: 'Lagos - Abuja',
      tripType: 'Flight',
      totalSeats: 25,
      avalialbleSeats: 5,
    },
    {
      id: 8,
      name: 'Hilux Premium',
      imageLink: '/images/logo.png',
      trip: 'Lagos - PH',
      tripType: 'Bus',
      totalSeats: 20,
      avalialbleSeats: 4,
    },
  ];

  const proceedToPay = () => {
    // Continue to payment;
  };

  return (
    <Body>
      <BookingsWrapper>
        <Section>
          <h1>Complete your booking</h1>
          <VehicleSelectWrapper>
            <h4>Select a vehicle</h4>
            {
              availableVehicles.map((vehicle) => (
                <VehicleListItem
                  key={vehicle.id}
                  name={vehicle.name}
                  trip={vehicle.trip}
                  tripType={vehicle.tripType}
                  totalSeats={vehicle.totalSeats}
                  imageLink={vehicle.imageLink}
                  active={activeVehicle === vehicle.id}
                  availableSeats={vehicle.availableSeats}
                  selectVehicle={() => setActiveVehicle(vehicle.id)}
                />
              ))
            }
          </VehicleSelectWrapper>
          <Button
            type="secondary"
            text="Proceed to pay"
            size="large"
            onClick={proceedToPay}
          />
        </Section>
      </BookingsWrapper>
    </Body>
  );
};

export default Bookings;
