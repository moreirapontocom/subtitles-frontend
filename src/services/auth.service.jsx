const Auth = {
  user: null,
  // authenticated: false,

  // login() {
    // this.authenticated = true;
  // },

  logout() {
    this.user = null;
    this.clearUser();
    // this.authenticated = false;
  },

  isAuthenticated() {
    const sto = localStorage.getItem("user");
    if (this.user) {
      return true;
    } else {
      if (sto) {
        this.user = JSON.parse(sto);
        return true;
      }
    }
    return false;
  },

  getUser() {
    const sto = localStorage.getItem("user");
    if (this.user) {
      return this.user;
    } else {
      if (sto) {
        this.user = JSON.parse(sto);
        return this.user;
      }
    }
    return;
  },

  setUser(user) {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  },

  clearUser() {
    this.user = {};
    localStorage.removeItem("user");
  },
};

export default Auth;
