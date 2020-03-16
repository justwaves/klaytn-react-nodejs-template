import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/modules/user';
import { removeWallet } from 'redux/modules/wallet';
import Header from './Header';

const HeaderContainer = () => {
  const { user } = useSelector(state => ({ user: state.user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    dispatch(removeWallet());
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
