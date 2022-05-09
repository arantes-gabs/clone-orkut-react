import Logo from 'components/Logo';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from 'components/Button';

import './login.scss';

const Login = () => {
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
            />
          </div>

          <div className="login__input-field">
            <TextField
              className="login__input"
              id="filled-basic"
              label="Senha"
              name="password"
              type="password"
            />
          </div>

          <Button>Entrar</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
