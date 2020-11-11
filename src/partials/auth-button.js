import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import HorList from './horizontal-list';
import { Button } from '../components/button';
import { logout, useAuthState, useAuthDispatch } from '../auth';
import AuthModal from './auth-modal';

const AuthButton = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState({
    open: false,
    mode: '',
    type: 'nav',
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

  useEffect(() => {
    if (!user && (router.pathname === '/bookings')) {
      setOpenModal((currentStatus) => ({
        ...currentStatus,
        open: true,
        mode: 'sign-up',
        type: 'booking',
      }));
    }
  }, []);

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
                type: 'nav',
              }))}
            />
            <Button
              text="Login"
              type="secondary"
              onClick={() => setOpenModal((currentStatus) => ({
                ...currentStatus,
                open: true,
                mode: 'login',
                type: 'nav',
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
            type={openModal.type}
          />
        )
      }
    </HorList>
  );
};

export default AuthButton;
