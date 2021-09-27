const Auth = {
  authenticated: false,

  login() {
    this.authenticated = true;
  },

  logout() {
    this.authenticated = false;
  },

  isAuthenticated() {
    return this.authenticated;
  },

  getUser() {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user)
    }
    return;
  },

  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  },

  clearUser() {
    localStorage.clear("user");
  },
};

export default Auth;
