import React from 'react';
import styled from 'styled-components';
import Tags from 'components/common/Tags';
import { Helmet } from 'react-helmet-async';
import SubInfo from 'components/common/SubInfo';
import Responsive from 'components/common/Responsive';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${props => props.theme.color.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${props => props.theme.color.gray[8]};
`;

const PostViewer = ({ post, loading, error, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  // 로딩 중이거나 아직 포스트 데이터가 없을 때
  if (loading || !post) {
    return null;
  }

  console.log(post);

  const { title, body, user, publishedDate, tags } = post;

  return (
    <PostViewerBlock>
      <Helmet>
        <title>{title} - Title</title>
      </Helmet>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
          hasMarginTop
        />
        <Tags tags={tags} />
      </PostHead>
      {actionButtons}
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};

export default PostViewer;
