import React from 'react';
import { Helmet } from 'react-helmet-async';
import { tempSetUser, check } from 'redux/modules/user';
import { integrateWallet, removeWallet } from 'redux/modules/wallet';
import store from 'redux/store';
import Routes from './Routes';

function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;

    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working');
  }
}

function loadWallet() {
  const walletFromSession = sessionStorage.getItem('walletInstance');
  if (walletFromSession) {
    try {
      const { privateKey } = JSON.parse(walletFromSession);
      store.dispatch(integrateWallet(privateKey));
    } catch (e) {
      store.dispatch(removeWallet());
    }
  }
}

loadUser();
loadWallet();

const App = () => (
  <>
    <Helmet>
      <title>Title</title>
    </Helmet>
    <Routes />
  </>
);

export default React.memo(App);
