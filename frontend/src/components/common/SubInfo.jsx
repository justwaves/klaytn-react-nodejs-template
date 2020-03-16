import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const SubInfoBlock = styled.div`
  ${props =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${props => props.theme.color.gray[6]};

  /* span 사이에 가운뎃점 문자 보여주기 */
  span + span:before {
    color: ${props => props.theme.color.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    /* 가운뎃점 문자 */
    content: '\\B7';
  }
`;

const SubInfo = ({ username, publishedDate, hasMarginTop }) => (
  <SubInfoBlock hasMarginTop={hasMarginTop}>
    <span>
      <b>
        <Link to={`/@${username}`}>{username}</Link>
      </b>
    </span>
    <span>{new Date(publishedDate).toLocaleDateString()}</span>
  </SubInfoBlock>
);

export default SubInfo;
