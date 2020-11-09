import { useState } from 'react';
import Router from 'next/router';
import HorList from './horizontal-list';
import { Button } from '../components/button';
import { logout, useAuthState, useAuthDispatch } from '../auth';
import AuthModal from './auth-modal';

const AuthButton = () => {
  const [openModal, setOpenModal] = useState({
    open: false,
    mode: '',
  });

  const closeModal = () => {
    setOpenModal((currentStatus) => ({
      ...currentStatus,
      open: false,
    }));
  };

  const dispatch = useAuthDispatch();
  const { user } = useAuthState();

  const handleLogout = () => {
    logout(dispatch);
    Router.replace('/');
  };

  return (
    <HorList>
      {
        !user ? (
          <>
            <Button
              text="Sign up"
              type="primary"
              onClick={() => setOpenModal((currentStatus) => ({
                ...currentStatus,
                open: true,
                mode: 'sign-up',
              }))}
            />
            <Button
              text="Login"
              type="secondary"
              onClick={() => setOpenModal((currentStatus) => ({
                ...currentStatus,
                open: true,
                mode: 'login',
              }))}
            />
          </>
        ) : (
          <Button
            text="Logout"
            type="secondary"
            onClick={handleLogout}
          />
        )
      }
      {
        openModal.open && (
          <AuthModal
            closeModal={closeModal}
            mode={openModal.mode}
            setMode={setOpenModal}
          />
        )
      }
    </HorList>
  );
};

export default AuthButton;
