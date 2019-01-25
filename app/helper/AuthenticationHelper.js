/**
 * This class is use to authenticate a user
 */
export default class AuthenticationHelper {

    constructor() {
    }

    static getAuthenticate() {
        return (sessionStorage.getItem('authenticate') == "true");
    }

    static setAuthenticate(bool) {
        sessionStorage.setItem('authenticate', bool);
    }

    static logout() {
        sessionStorage.removeItem('authenticate');
    }
}