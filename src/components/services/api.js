import signInError from '../../errors/signInError';

export default async function callApi(e, email, password) {
  e.preventDefault();
  let user = {
    email: email,
    password: password,
  };

  try {
    let response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    });
    const responseBody = await response.json();
    const status = responseBody.status;

    if (status === 200) {
      const token = responseBody.body.token;
      // window.location.replace('./user');
      console.log(token);
      return token;
    } else {
      signInError();
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}
