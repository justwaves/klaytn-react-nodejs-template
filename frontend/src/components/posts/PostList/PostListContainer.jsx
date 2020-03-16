import React, { useEffect, useCallback } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from 'redux/modules/posts';
import PostList from './PostList';

const PostListContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(state => ({
    posts: state.posts.posts,
    error: state.posts.error,
    loading: state.loading['posts/LIST_POSTS'],
    user: state.user.user,
  }));

  const onListPost = useCallback(
    ({ tag, username, page }) => dispatch(listPosts({ tag, username, page })),
    [dispatch],
  );

  useEffect(() => {
    const { tag, username, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    onListPost({ tag, username, page });
  }, [dispatch, location.search, onListPost]);

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  );
};

export default withRouter(React.memo(PostListContainer));
