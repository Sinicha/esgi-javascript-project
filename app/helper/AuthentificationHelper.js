/**
 * This class is use to authenticate a user
 */
export default class AuthenticationHelper {

    constructor() {
    }

    getAuthenticate() {
        return sessionStorage.getItem('authenticate');
    }

    setAuthenticate(user) {
        sessionStorage.setItem('authenticate', user);
    }

    logout() {
        sessionStorage.removeItem('authenticate');
    }
}