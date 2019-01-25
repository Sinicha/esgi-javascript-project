export function login(pError) {
    let error = "";
    if(typeof pError == 'string') {
        error = `<div>` + pError + `</div>`;
    }
    return `
     <h1 class="h1-title">Connexion</h1>` +
        error
        + `<div class="container-form" id="login_form_container" class="item-form">
             <input type="email" name="email" placeholder="Votre email" class="item-form">
             <input type="password" name="password" placeholder="Votre mot de passe" class="item-form">
             <button class="item-form form-submit" id="login_form">Se connecter</button>
        </div>`;
}

