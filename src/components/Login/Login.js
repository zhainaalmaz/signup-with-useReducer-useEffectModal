import React, { useReducer } from 'react';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';

const nameReg = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
const emailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const FormReducer = (prevState, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      ...prevState,
      username: action.userName,
      isValid: !nameReg.test(action.userName),
    };
  }
  if (action.type === 'USER_WARNING') {
    return {
      ...prevState,
      isValid: action.value,
    };
  }
  if (action.type === 'EMAIL_INPUT') {
    return {
      ...prevState,
      emailvalue: action.emailValue,
      isValidEmail: !emailReg.test(action.emailValue),
    };
  }
  if (action.type === 'EMAIL_WARNING') {
    return {
      ...prevState,
      isValidEmail: action.value,
    };
  }

  if (action.type === 'USER_PASSWORD') {
    return {
      ...prevState,
      passwordValue: action.passwordValue,
      isValidPassword: !nameReg.test(action.passwordValue),
    };
  }
  if (action.type === 'PASSWORD_WARNING') {
    return {
      ...prevState,
      isValidPassword: prevState.userPassword.trim().length > 6,
    };
  }
  if (action.type === 'FORM_WARNING') {
    return {
      ...prevState,
      formIsValid: action.value,
    };
  }
  return {
    ...prevState,
  };
};

function Login(props) {
  const [allStates, dispatchAll] = useReducer(FormReducer, {
    username: '',
    isValid: false,
    userPassword: '',
    isValidPassword: false,
    userEmail: '',
    isValidEmail: false,
    formIsValid: false,
  });

  const userNameChangHandler = (e) => {
    dispatchAll({ type: 'USER_INPUT', userName: e.target.value });
  };
  const emailChangHandler = (e) => {
    dispatchAll({ type: 'EMAIL_INPUT', emailValue: e.target.value });
  };
  const passwordChangHandler = (e) => {
    dispatchAll({ type: 'USER_PASSWORD', passwordValue: e.target.value });
  };

  const validateUserNameHandler = () => {
    dispatchAll({ type: 'USER_WARNING' });
  };

  const validateEmailHandler = () => {
    dispatchAll({ type: 'EMAIL_WARNING' });
  };

  const validatePasswordHandler = () => {
    dispatchAll({ type: 'PASSWORD_WARNING' });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(allStates.isValid);
    console.log(nameReg.test(allStates.userName));

    if (!nameReg.test(allStates.username)) {
      dispatchAll({ type: 'USER_WARNING', value: true });
      return;
    }

    if (!emailReg.test(allStates.emailvalue)) {
      dispatchAll({ type: 'EMAIL_WARNING', value: true });
      return;
    }

    if (!nameReg.test(allStates.passwordValue)) {
      dispatchAll({ type: 'PASSWORD_WARNING', value: true });
      return;
    }

    props.onLogin(
      allStates.username0,
      allStates.emailvalue,
      allStates.passwordValue
    );
  };

  return (
    <>
      <Card>
        <div className={classes.login}>
          <form onSubmit={submitHandler} className={classes.form}>
            <div>
              <h2>Sign Up for Free</h2>
            </div>
            <div
              className={` ${classes.control} ${
                !allStates.isValid === false ? classes.invalid : ''
              }`}
            >
              <label htmlFor="username" className={classes.control_label}>
                UserName
              </label>

              <input
                className={classes.control_input}
                type="text"
                placeholder="Name*"
                onChange={userNameChangHandler}
                onBlur={validateUserNameHandler}
              />
              {allStates.isValid && (
                <p>Username must have letters and digits</p>
              )}
            </div>
            <div
              className={` ${classes.control} ${
                !allStates.isValidEmail === false ? classes.invalid : ''
              }`}
            >
              <label htmlFor="email" className={classes.control_label}>
                E-mail
              </label>
              <input
                className={classes.control_input}
                type="email"
                placeholder="Email Address*"
                onChange={emailChangHandler}
                onBlur={validateEmailHandler}
              />
              {allStates.isValidEmail && <p>Email address is invalid</p>}
            </div>
            <div
              className={`${classes.control} ${
                !allStates.isValidPassword === false ? classes.invalid : ''
              }`}
            >
              <label htmlFor="password" className={classes.control_label}>
                Password
              </label>
              <input
                className={classes.control_input}
                type="password"
                placeholder="Set a Password*"
                onChange={passwordChangHandler}
                onBlur={validatePasswordHandler}
              />
              {allStates.isValidPassword && (
                <p>
                  Password must have letters and digits, more than 6 characters
                </p>
              )}
            </div>
            <div className={classes.actions}>
              <Button type="submit">Sign up</Button>
            </div>
            <span className={classes.form_input_login}>
              Already have an account? Login <a href="#">here</a>
            </span>
          </form>
        </div>
      </Card>
    </>
  );
}

export default Login;
