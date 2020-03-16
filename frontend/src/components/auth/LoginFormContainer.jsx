import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, login } from 'redux/modules/auth';
import { check } from 'redux/modules/user';
import { integrateWallet } from 'redux/modules/wallet';
import AuthForm from './AuthForm';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(state => ({
    form: state.auth.login,
    auth: state.auth.auth,
    authError: state.auth.authError,
    user: state.user.user,
  }));

  const onIntegrateWallet = useCallback(
    privateKey => dispatch(integrateWallet(privateKey)),
    [dispatch],
  );

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const { username, password } = form;
      const privateKey =
        '0x79b4c8dca968eabb8f5061d3b41888898240543aadfd3d849bed24d61053239e';

      onIntegrateWallet(privateKey);
      dispatch(login({ username, password }));
    },
    [dispatch, form, onIntegrateWallet],
  );

  // component가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  // login 성공/실패 처리
  useEffect(() => {
    if (authError) {
      console.log('오류발생');
      console.log(authError);
      setError('로그인 실패');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user 값이 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      history.push('/'); // 홈화면으로 이동
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

// const mapDispatchToProps = dispatch => ({
//   integrateWallet: (privateKey) => dispatch(integrateWallet(privateKey)),
// })

export default withRouter(React.memo(LoginForm));
