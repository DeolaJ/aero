import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Modal from '../components/modal';
import SignupForm from '../components/sign-up';
import LoginForm from '../components/login';
import { Button } from '../components/button';

const AuthModalWrapper = styled.div`
  max-width: 1150px;
  width: 94%;
  max-height: 85vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  transition: visibility 800ms,
              opacity 800ms;

  &.open {
    visibility: visible;
    opacity: 1;
  }
`;

const AuthModalBody = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  > div {
    flex: 0 0 38%;

    + div {
      margin-left: 8%;
      flex: 0 0 54%;
    }
  }

  .close-icon {
    position: absolute;
    top: -1.5rem;
    right: 0;
  }

  @media (max-width: 768px) {
    display: block;

    > div + div {
      margin-left: 0;
    }

    .close-icon {
      top: -2rem;
      right: -1rem;
    }
  }
`;

const AuthModal = ({
  mode, closeModal, setMode, type,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 500);
  }, []);

  return (
    <Modal>
      <AuthModalWrapper
        className={open ? 'open' : null}
      >
        <AuthModalBody>
          <Button
            type="icon"
            text="Close Modal"
            className="close-icon"
            iconLink="/images/close-black.svg"
            onClick={closeModal}
          />
          {
            type === 'nav' && (
              <>
                {
                  mode === 'sign-up' ? (
                    <SignupForm setMode={setMode} type="nav" />
                  ) : (
                    <LoginForm setMode={setMode} />
                  )
                }
              </>
            )
          }
          {
            type === 'booking' && (
              <SignupForm setMode={setMode} type="booking" closeModal={closeModal} />
            )
          }
        </AuthModalBody>
      </AuthModalWrapper>
    </Modal>
  );
};

AuthModal.propTypes = {
  mode: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default AuthModal;
