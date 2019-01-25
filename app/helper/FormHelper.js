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
                console.error("L'élément du form ", element, " est vide.")
            }
        }

        return getValueForm;
    }

    static getSignUpFormValue(formData) {
        let getValueForm = {
            'last_name': formData.children.last_name.value,
            'first_name': formData.children.first_name.value,
            'email': formData.children.email.value,
            'password': formData.children.password.value
        };

        for (let element in getValueForm) {
            if (element == null) {
                console.error("L'élément du form ", element, " est vide")
            }
        }

        console.log("Form", getValueForm);

        return getValueForm;
    }
}