const keyUser = 'authx.user';
const registeredUsers = new Map([
  ['admin', {
    id: 'uid:0', username: 'admin', email: 'admin@example.com', password: 'qwerty', firstname: 'App', lastname: 'Admin',
  }],
  ['lee', {
    id: 'uid:973236115', username: 'lee', email: 'lee@acme.com', password: '12345', firstname: 'Steve', lastname: 'Lee',
  }],
]);

function newUID() {
  const epoch = Math.floor(new Date() / 1000).toString();
  return `uid:${epoch}`;
}

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
    // Using setTimeout to simulate network latency.
    setTimeout(() => {
      const found = registeredUsers.get(username);
      if (!found) {
        return reject(new Error('user not found'));
      }

      if (found.password !== password) {
        return reject(new Error('invalid credentials'));
      }

      const token = newToken();
      setSession(found, token);
      return resolve(token);
    }, 2000);
  });
}

async function logout() {
  return new Promise((resolve) => {
    // Using setTimeout to simulate network latency.
    setTimeout(() => {
      localStorage.removeItem(keyUser);
      resolve();
    }, 1000);
  });
}

async function sendPasswordReset() {
  return new Promise((resolve) => {
    // Using setTimeout to simulate network latency.
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

async function addUser(user) {
  return new Promise((resolve) => {
    // Using setTimeout to simulate network latency.
    const id = newUID();
    setTimeout(() => {
      const merged = {
        ...user,
        id,
      };

      registeredUsers.set(user.username, merged);
      resolve(merged);
    }, 1000);
  });
}

async function getUsers() {
  return new Promise((resolve) => {
    // Using setTimeout to simulate network latency.
    setTimeout(() => {
      const users = Array.from(registeredUsers.values());
      resolve(users);
    }, 1000);
  });
}

// The useAuth hook is a wrapper to this service, make sure exported functions are also reflected
// in the useAuth hook.
export {
  getSession, isAuth, login, logout, sendPasswordReset, addUser, getUsers,
};
