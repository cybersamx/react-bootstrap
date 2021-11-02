const tokenKey = 'authx.token';
const registeredUsers = [
  { id: 'uid:0', username: 'admin', password: 'qwerty' },
  { id: 'uid:1', username: 'lee', password: '123456' },
];

function newToken() {
  return (Math.random() * 1000000000).toString(16);
}

function getToken() {
  return localStorage.getItem(tokenKey);
}

function isAuth() {
  return !!getToken();
}

async function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = registeredUsers.find((user) => user.username === username && user.password === password);

      if (found) {
        const token = newToken();
        localStorage.setItem(tokenKey, token);
        return resolve(token);
      }

      return reject(new Error('invalid credentials'));
    }, 2000);
  });
}

async function logout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem(tokenKey);
      resolve();
    }, 1000);
  });
}

export {
  getToken, isAuth, login, logout,
};
