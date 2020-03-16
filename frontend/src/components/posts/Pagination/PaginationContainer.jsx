import React from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Pagination from './Pagination';

const PaginationContainer = ({ location }) => {
  // eslint-disable-next-line no-shadow
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));

  if (!posts || loading) return null;

  // page가 없으면 1을 기본값으로 사용
  const { tag, username, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default withRouter(PaginationContainer);
