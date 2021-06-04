var CreateUser = Vue.component('CreateUser', {
    template: `
<div class="accueil"  style="padding-bottom: 14vh">
    <div class="container" style="max-width: 80vh; padding-bottom: 20vh">
    <form id="el" @submit.prevent="submit" class="m-0-auto">
        <div class="card-header">
            <h3 class="t-align-c t-white">S'inscrire</h3>
            <p class="t-align-c">Vous avez déjà un compte ? <span><a href="">S'inscire</a></span></p>
        </div>

        <br/>
        <div class="input-group">
            <input
                    type="text"
                    class="form-control"
                    placeholder="Pseudonyme"
                    v-model="user.username"
                    required>
        </div>

        <br/>
        <div class="input-group">
            <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    v-model="user.email"
                    required>
        </div>

        <br/>
        <div class="input-group">
            <input
                    type="password"
                    class="form-control"
                    placeholder="Mot de passe"
                    v-model="user.password"
                    required>
        </div>

        <br/>
        <button type="submit" class="btn btn-primary float-right">S'inscrire</button>
    </form>
    </div>
</div>
    `,
    data() {
        return {
            user: {
                username: null,
                email: null,
                password: null
            }
        }
    },
    methods: {
        submit() {
            // Objet FormData pour passage de paramètres
            let params = new FormData();

            // Ajout des données de l'oeuvre
            params.append("username", this.user.username);
            params.append("user_email", this.user.email);
            params.append("user_password", this.user.password);

            // Appel Ajax via axios ajout de l'oeuvre
            axios.post("http://localhost/projets2/backend/createUser.php", params)
                // Réponse et récupération des données
                .then(response => {
                    console.log(response);
                    // this.$router.push('/');
                })
                // Cas d'erreur
                .catch(error => {
                    console.log("Erreur : ", error);
                })
        }
    }
})
