const keyUser = 'authx.user';
const registeredUsers = [
  {
    id: 'uid:0', username: 'admin', email: 'admin@example.com', password: 'qwerty',
  },
  {
    id: 'uid:1', username: 'lee', email: 'lee@example.com', password: '123456',
  },
];

function newToken() {
  return (Math.random() * 1000000000).toString(16);
}

function setSession(user, token) {
  // Remove the password property.
  const { password, ...rest } = user;

  // Merge token to the final object.
  const merged = {
    ...rest,
    token,
  };

  localStorage.setItem(keyUser, JSON.stringify(merged));
}

function getSession() {
  const user = localStorage.getItem(keyUser);

  return JSON.parse(user);
}

function isAuth() {
  return !!getSession();
}

async function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = registeredUsers.find((user) => user.username === username && user.password === password);

      if (found) {
        const token = newToken();
        setSession(found, token);
        return resolve(token);
      }

      return reject(new Error('invalid credentials'));
    }, 2000);
  });
}

async function logout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem(keyUser);
      resolve();
    }, 1000);
  });
}

export {
  getSession, isAuth, login, logout,
};
