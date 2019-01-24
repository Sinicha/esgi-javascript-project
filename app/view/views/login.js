export function login() {
    return `
     <h1 class="h1-title">Connexion</h1>
     <form method="post" action="#">
         <div class="container-form" class="item-form">
             <input type="email" name="email" placeholder="Votre email" class="item-form">
             <input type="password" name="password" placeholder="Votre mot de passe" class="item-form">
             <button type="submit" class="item-form form-submit">Se connecter</button>
        </div>
    </form>`;
}