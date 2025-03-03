export function signup(username, password) {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[username]) {
      alert('Username already exists.');
      return;
    }
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  export function login(username, password) {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[username] && users[username] === password) {
      localStorage.setItem('loggedInUser', username);
    } else {
      alert('Invalid username or password.');
    }
  }
  
  export function logout() {
    localStorage.removeItem('loggedInUser');
  }
  
  export function isLoggedIn() {
    return localStorage.getItem('loggedInUser') !== null;
  }