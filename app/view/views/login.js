export function login() {
    return `
     <h1 class="h1-title">Connexion</h1>
         <div class="container-form" id="login_form_container" class="item-form">
             <input type="email" name="email" placeholder="Votre email" class="item-form">
             <input type="password" name="password" placeholder="Votre mot de passe" class="item-form">
             <button class="item-form form-submit" id="login_form">Se connecter</button>
        </div>`;
}

