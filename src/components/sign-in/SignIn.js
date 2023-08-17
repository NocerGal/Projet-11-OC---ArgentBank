import { useState } from 'react';
import { useDispatch } from 'react-redux';
import callApi from '../services/api';
import { createToken } from '../../Slices/redux';

function SignIn({
  icon,
  alt,
  title,
  form_account,
  form_password,
  tick_text,
  text_button,
}) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleInputemailChanges(e) {
    setEmail(e.target.value);
  }
  function handleInputPasswordChanges(e) {
    setPassword(e.target.value);
  }

  async function handlClick(e) {
    const response = await callApi(e, email, password);
    if (response.token) {
      dispatch(createToken(response.token));
    }
  }

  return (
    <>
      <i className="fa fa-email-circle sign-in-icon">
        <img src={icon} alt={alt} />
      </i>
      <h1>{title}</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="emailname">{form_account}</label>
          <input
            type="text"
            id="emailname"
            onChange={handleInputemailChanges}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">{form_password}</label>
          <input
            type="password"
            id="password"
            onChange={handleInputPasswordChanges}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">{tick_text}</label>
        </div>
        <button type="submit" className="sign-in-button" onClick={handlClick}>
          {text_button}
        </button>
      </form>
    </>
  );
}

export default SignIn;
