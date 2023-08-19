import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getToken } from '../services/api';

import signInError from '../../errors/signInError';
import { stateNewToken } from '../../Slices/redux';
import { useNavigate, useParams } from 'react-router-dom';

function SignIn({
  icon,
  alt,
  title,
  form_account,
  form_password,
  tick_text,
  text_button,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handlClick(e) {
    e.preventDefault();
    try {
      const token = await getToken(email, password);
      dispatch(stateNewToken(token));
      navigate(`/user/${encodeURIComponent(token)}`);
    } catch (error) {
      signInError();
      console.log('Email ou mot de passe incorrect', error);
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">{form_password}</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
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
