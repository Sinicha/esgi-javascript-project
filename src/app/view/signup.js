export function signup() {
    return `
     <h1 class="h1-title">Inscription</h1>
         <div class="container-form" class="item-form" id="signup_form_container">
             <input type="text" name="last_name" placeholder="Votre nom" class="item-form">
             <input type="text" name="first_name" placeholder="Votre prénom" class="item-form">
             <input type="email" name="email" placeholder="Votre email" class="item-form">
             <input type="password" name="password" placeholder="Votre mot de passe" class="item-form">
             <button type="submit" class="item-form form-submit" id="signup_form">S'inscrire</button>
        </div>`;
}