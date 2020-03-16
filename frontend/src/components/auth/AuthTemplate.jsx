import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트
// children으로 받아온 내용을 보여 주기만 하는 역할

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${props => props.theme.color.gray[2]};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }

  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  width: 360px;
  padding: 2rem;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => (
  <AuthTemplateBlock>
    <WhiteBox>
      <div className="logo-area">
        <Link to="/">Logo</Link>
      </div>
      {children}
    </WhiteBox>
  </AuthTemplateBlock>
);

export default AuthTemplate;
