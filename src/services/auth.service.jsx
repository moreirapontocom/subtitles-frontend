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

  // getUser() {
  //   return localStorage.getItem("user");
  // },

  // setUser(user) {
  //   localStorage.setItem("user", JSON.stringify(user));
  // },
};

export default Auth;
