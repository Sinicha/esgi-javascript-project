/**
 * This class is use to authenticate a user
 */
export default class AuthenticationHelper {

    constructor() {
    }

    static getAuthenticate() {
        return (sessionStorage.getItem('authenticate') !== null);
    }

    static setAuthenticate(user) {
        let stringify = JSON.stringify(user);
        sessionStorage.setItem('authenticate', stringify);
    }

    static getUser() {
        return JSON.parse(sessionStorage.getItem('authenticate'));
    }

    static logout() {
        sessionStorage.removeItem('authenticate');
    }
}