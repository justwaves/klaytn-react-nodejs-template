import React from 'react';
import AuthTemplate from 'components/auth/AuthTemplate';
import RegisterForm from 'components/auth/RegisterFormContainer';

const RegisterPage = () => (
  <AuthTemplate>
    <RegisterForm />
  </AuthTemplate>
);

export default RegisterPage;
