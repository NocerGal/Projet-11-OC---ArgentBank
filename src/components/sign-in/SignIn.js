import { useState } from 'react';
// import { useFetcher } from 'react-router-dom';

function SignIn({
  icon,
  alt,
  title,
  form_account,
  form_password,
  tick_text,
  text_button,
}) {
  // // eslint-disable-next-line no-unused-vars
  // const fetch = useFetcher;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  function handleInputemailChanges(e) {
    setEmail(e.target.value);
  }
  function handleInputPasswordChanges(e) {
    setPassword(e.target.value);
  }

  async function handlClick(e) {
    e.preventDefault();

    let user = {
      email: email,
      password: password,
    };
    let response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    });
    const responseBody = await response.json();
    let status = responseBody.status;
    setToken(responseBody.body.token);
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
