import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${props => props.theme.color.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 1rem;
  outline: none;
  border: none;
  border-bottom: 1px solid ${props => props.theme.color.gray[5]};
  padding-bottom: 0.5rem;

  &:focus {
    color: ${props => props.theme.color.cyan[7]};
    border-bottom: 1px solid ${props => props.theme.color.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${props => props.theme.color.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.color.gray[9]};
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3 className="loginText">{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="off"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop fullWidth cyan>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="register">회원가입</Link>
        ) : (
          <Link to="login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default React.memo(AuthForm);
