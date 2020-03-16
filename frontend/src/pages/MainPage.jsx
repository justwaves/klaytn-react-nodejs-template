import React from 'react';
import HeaderContainer from 'components/common/Header/HeaderContainer';
import PostListContainer from 'components/posts/PostList/PostListContainer';
import PaginationContainer from 'components/posts/Pagination/PaginationContainer';

const MainPage = () => (
  <>
    <HeaderContainer />
    <PostListContainer />
    <PaginationContainer />
  </>
);

export default MainPage;
