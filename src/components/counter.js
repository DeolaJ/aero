import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { ButtonIcon } from './button';
import HorList from '../partials/horizontal-list';

const CounterValue = styled.p`
  border: 1px solid #C4C4C4;
  padding: 3px;
  border-radius: 4px;
`;

const CounterButton = styled(ButtonIcon)`
  border: 1px solid #C4C4C4;
  padding: 3px;
  border-radius: 4px;
`;

const CounterLabel = styled.p`
  margin: 0;
`;

const Counter = ({
  count, setCount,
}) => {
  const [countValue, setCountValue] = useState(count);

  const updateFieldControl = useRef((newValue, currentValue) => {
    if (!isEqual(currentValue, newValue)) {
      setCount(newValue);
    }
  });

  useEffect(() => updateFieldControl.current(countValue, count), [countValue]);

  return (
    <HorList spacing={18}>
      <CounterLabel>
        Passengers
      </CounterLabel>
      <HorList spacing={8}>
        <CounterButton
          disabled={countValue <= 0}
          onClick={() => setCountValue((oldCount) => (oldCount - 1))}
        >
          <img src="" alt="increment option" />
        </CounterButton>
        <CounterValue>
          {countValue}
        </CounterValue>
        <CounterButton
          onClick={() => setCountValue((oldCount) => (oldCount + 1))}
        >
          <img src="" alt="increment option" />
        </CounterButton>
      </HorList>
    </HorList>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

export default Counter;
