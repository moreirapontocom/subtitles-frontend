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
    }

}

export default Auth;