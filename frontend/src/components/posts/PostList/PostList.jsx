/* eslint-disable no-underscore-dangle */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tags from 'components/common/Tags';
import Responsive from 'components/common/Responsive';
import Button from 'components/common/Button';
import SubInfo from 'components/common/SubInfo';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;

  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }

  & + & {
    border-top: 1px solid ${props => props.theme.color.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 0;
    &:hover {
      color: ${props => props.theme.color.gray[6]};
    }
  }

  p {
    margin-top: 3rem;
  }
`;

const PostItem = React.memo(({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;
  return (
    <PostItemBlock>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </PostItemBlock>
  );
});

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  console.log(posts);

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>
      {/* 로딩중이 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {!loading && posts && (
        <div>
          {posts.map(post => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default React.memo(PostList);
