export default class FormHelper {

    constructor() {

    }

    static getLoginFormValue(formData) {
        let getValueForm = {
            'email': formData.children.email.value,
            'password': formData.children.password.value
        };
        for (let element in getValueForm) {
            if (element == null) {
                console.error("L'élément du form ", element, " est vide")
            }
        }

        return getValueForm;
    }

    static getSignUpFormValue(formData) {

    }
}