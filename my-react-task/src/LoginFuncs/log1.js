// Login.js

import React from 'react';
import styled from 'styled-components';

const LoginPage = styled.div`
  background-image: url('"https://source.unsplash.com/55btQzyDiO8" ');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled.form`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const log1 = () => {
  return (
    <LoginPage>
      <LoginForm>
        <h2>Login</h2>
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginPage>
  );
};

export default log1;
