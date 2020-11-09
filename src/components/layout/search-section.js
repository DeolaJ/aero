import { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Section from '../section';
import Dropdown from '../../partials/dropdown';
import TimePickerOption from '../../partials/time-picker';
import DatePickerOption from '../../partials/date-picker';
import Counter from '../counter';

const SearchSectionWrapper = styled.div`
`;

const SearchBody = styled.div`
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

const TwoColumns = styled.div`
  display: block;

  > * + * {
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 2;

    > * + * {
      margin-top: 0;
      margin-left: 1rem;
    }
  }
`;

const SearchSection = () => {
  const [count, setCount] = useState(0);
  const [destination, setDestination] = useState('chocolate');
  const [location, setLocation] = useState('chocolate');
  const [date, setDate] = useState(new Date());

  return (
    <SearchSectionWrapper>
      <Section
        miniHeader
        title="Start your Flight Search"
      >
        <SearchBody>
          <TwoColumns>
            <Dropdown
              setValue={setLocation}
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
              value={location}
              placeholder="Select location"
            />
            <Dropdown
              setValue={setDestination}
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
              value={destination}
              placeholder="Select destination"
            />
          </TwoColumns>
          <DatePickerOption
            value={date}
            setValue={setDate}
          />
          <TimePickerOption
            value={date}
            setValue={setDate}
          />
          <Counter
            count={count}
            setCount={setCount}
          />
        </SearchBody>
      </Section>
    </SearchSectionWrapper>
  );
};

// SearchSection.propTypes = {
// };

export default SearchSection;
