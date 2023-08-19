// API base URL
const baseUrl = 'http://localhost:3001/api/v1/';

// POST
async function postAccessToToken(email, password) {
  let user = {
    email: email,
    password: password,
  };
  let response = await fetch(`${baseUrl}user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  });
  return response;
}

async function postSignUp(email, password, firstName, lastName, userName) {
  let newUser = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    userName: userName,
  };
  let response = await fetch(`${baseUrl}user/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newUser),
  });
  return response;
}

// GET
export async function getToken(email, password) {
  const response = await postAccessToToken(email, password);
  const responseBody = await response.json();
  const token = responseBody.body.token;
  return token;
}

// POST
async function putChangeUserName() {
  let newUserName = {
    newUserName: newUserName,
  };

  fetch(`${baseUrl}/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUserName), //
  });
}
