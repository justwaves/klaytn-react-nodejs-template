/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from 'redux/modules/post';
import { removePost } from 'lib/api/posts';
import { setOriginalPost } from 'redux/modules/write';
import PostViewer from './PostViewer';
import PostActionButtons from '../PostActionButtons';

const PostViewerContainer = ({ match, history }) => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(state => ({
    post: state.post.post,
    error: state.post.error,
    loading: state.loading['post/READ_POST'],
    user: state.user.user,
  }));

  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    history.push('/write');
  };

  const ownPost = (user && user._id) === (post && post.user._id);

  const onRemove = async () => {
    try {
      await removePost(postId);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={
        ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default withRouter(PostViewerContainer);
