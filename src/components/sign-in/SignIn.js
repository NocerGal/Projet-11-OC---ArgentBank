function SignIn({
  icon,
  alt,
  title,
  form_account,
  form_password,
  tick_text,
  text_button,
}) {
  return (
    <>
      <i className="fa fa-user-circle sign-in-icon">
        <img src={icon} alt={alt} />
      </i>
      <h1>{title}</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">{form_account}</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">{form_password}</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">{tick_text}</label>
        </div>
        <a href="./user" className="sign-in-button">
          {text_button}
        </a>
      </form>
    </>
  );
}

export default SignIn;
