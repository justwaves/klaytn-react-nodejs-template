import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import WalletPage from './pages/WalletPage';
import TestPage from './pages/TestPage';
// import ScrollToTop from 'components/ScrollToTop';

const Routes = () => (
  //   <ScrollToTop>
  <Switch>
    <Route path="/" exact component={MainPage} />
    <Route path="/@:username" exact component={PostListPage} />
    <Route path="/@:username/:postId" component={PostPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/write" component={WritePage} />
    <Route path="/wallet" component={WalletPage} />
    <Route path="/test" component={TestPage} />
    <Redirect from="*" to="/" />
  </Switch>
  //   </ScrollToTop>
);

export default Routes;
