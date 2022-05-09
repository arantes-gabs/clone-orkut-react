import Logo from 'components/Logo';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from 'components/Button';
import isClient from 'utils/envs/isClient';

import './login.scss';
import { navigate } from 'gatsby';

const Login = () => {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  console.log({ user });

  const onSubmit = (event) => {
    event.preventDefault();

    const body = JSON.stringify({
      email: user,
      password: pass,
    });

    fetch(
      'https://77c8-2804-14c-5b74-8d87-a533-e7d9-3d0e-8b9c.sa.ngrok.io/sessions',
      {
        method: 'POST',
        body: body,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((data) => {
        if (data.status !== 200) {
          alert('Credenciais erradas');
          return;
        }
        return data.json();
      })
      .then((response) => {
        if (isClient()) {
          console.log({ response });
          if (response.token) {
            navigate('/profile');
            localStorage.setItem('session', JSON.stringify(response));
          }
        }
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div className="login">
      <div className="login__content">
        <Logo />

        <form noValidate autoComplete="off">
          <div className="login__input-field">
            <TextField
              className="login__input"
              id="filled-basic"
              label="Login"
              name="login"
              value={user}
              onChange={(event) => {
                setUser(event.target.value);
              }}
            />
          </div>

          <div className="login__input-field">
            <TextField
              className="login__input"
              id="filled-basic"
              label="Senha"
              name="password"
              type="password"
              value={pass}
              onChange={(event) => {
                setPass(event.target.value);
              }}
            />
          </div>

          <Button onClick={onSubmit}>Entrar</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
