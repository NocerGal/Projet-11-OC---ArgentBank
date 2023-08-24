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

export async function postGetProfile(token) {
  let response = await fetch(`${baseUrl}user/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
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

export async function getUserName(token) {
  const response = await postGetProfile(token);
  const responseBody = await response.json();
  const userName = responseBody.body.userName;
  return userName;
}
export async function getFirstName(token) {
  const response = await postGetProfile(token);
  const responseBody = await response.json();
  const firstName = responseBody.body.firstName;
  return firstName;
}
export async function getLastName(token) {
  const response = await postGetProfile(token);
  const responseBody = await response.json();
  const lastName = responseBody.body.lastName;
  return lastName;
}

// PUT
export async function putChangeUserName(token, newUserName) {
  let userName = {
    userName: newUserName,
  };

  let response = await fetch(`${baseUrl}user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(userName),
  });
  return response;
}

// const baseUrl = 'http://localhost:3001/api/v1/';

// // Fonction de base pour effectuer des requêtes
// async function apiRequest(endpoint, method, body, token) {
//   const headers = {
//     'Content-Type': 'application/json;charset=utf-8',
//   };

//   if (token) {
//     headers['Authorization'] = 'Bearer ' + token;
//   }

//   const response = await fetch(`${baseUrl}${endpoint}`, {
//     method,
//     headers,
//     body: JSON.stringify(body),
//   });

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   return response.json();
// }

// // Fonctions pour effectuer des actions spécifiques
// export async function login(email, password) {
//   return apiRequest('user/login', 'POST', { email, password });
// }

// export async function signUp(userData) {
//   return apiRequest('user/signup', 'POST', userData);
// }

// export async function getProfile(token) {
//   return apiRequest('user/profile', 'POST', null, token);
// }

// export async function updateUserName(token, newUserName) {
//   return apiRequest('user/profile', 'PUT', { userName: newUserName }, token);
// }

// // Fonctions utilitaires pour extraire des données spécifiques
// export async function fetchToken(email, password) {
//   const responseBody = await login(email, password);
//   return responseBody.body.token;
// }

// export async function fetchUserName(token) {
//   const responseBody = await getProfile(token);
//   return responseBody.body.userName;
// }

// export async function fetchFirstName(token) {
//   const responseBody = await getProfile(token);
//   return responseBody.body.firstName;
// }

// export async function fetchLastName(token) {
//   const responseBody = await getProfile(token);
//   return responseBody.body.lastName;
// }
