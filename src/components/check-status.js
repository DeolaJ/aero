/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import styled from '@emotion/styled';
import HorList from '../partials/horizontal-list';
import { Button } from './button';
import InputField from './input-field';

const CheckStatusWrapper = styled.div`
  width: 100%;

  > div {
    width: 100%;

    > div {
      flex: 0 0 50%;
      margin-bottom: 0;
    }
  }
`;

const CheckStatus = () => {
  const [status, setStatus] = useState('');

  return (
    <CheckStatusWrapper>
      <HorList leftStart spacing={20} wrapList={400} bottom>
        <InputField
          label="Check booking status"
          id="check-status"
          type="text"
          value={status}
          placeholder="Enter reference number"
          setValue={setStatus}
        />
        <Button
          type="primary"
          text="Proceed"
        />
      </HorList>
    </CheckStatusWrapper>
  );
};

export default CheckStatus;
