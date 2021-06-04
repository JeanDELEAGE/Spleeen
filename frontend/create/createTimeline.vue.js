var CreateTimeline = Vue.component('CreateTimeline', {
    template:`
<div style="padding-bottom: 10vh">
    <div class="container" style="max-width: 80vh; padding-bottom: 20vh">
    <form id="el" @submit.prevent="submit" class="m-0-auto">
        <div class="card-header">
            <h3 class="t-align-c t-white">Créer une timeline</h3>
        </div>

        <br/>
        <div>
            <img :src="imageData" alt=""
            id="previewImage">
            <div class="input-group">
                <input type="file" class="custom-file-input" @change="previewImage" id="validatedCustomFile" 
                accept="image/png, image/jpeg">
                <label class="custom-file-label" for="validatedCustomFile">
                    Ajouter une image de couverture
                </label>
                <div class="invalid-feedback">Image invalide</div>
            </div>
        </div>

        <br/>
        <div class="input-group">
            <input
                    type="text"
                    class="form-control"
                    placeholder="Titre de la timeline"
                    v-model="timeline.title"
                    maxlength="50"
                    required>
        </div>

        <br/>
        <div class="input-group">
            <input
                    type="date"
                    class="form-control"
                    placeholder="Date de création de la timeline"
                    v-model="timeline.creation_date"
                    required>
        </div>

        <br/>
        <p>Description de votre timeline</p>
        <div class="input-group">
            <input
                    type="text"
                    class="form-control"
                    maxlength="400"
                    placeholder="Décrivez votre timeline ici"
                    v-model="timeline.description">
        </div>

        <br/>
        <button type="submit" class="btn btn-primary float-right">Créer</button>
    </form>
    </div>
</div>
    `,
    data(){
        return {
            imageData: null,
            timeline:{
                title: null,
                description: null,
                cover_picture: null,
                creation_date: null,
            }
        }
    },
    mounted(){
    },
    methods:{

        previewImage: function(event) {
            this.timeline.cover_picture = event.target.files[0];
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            }
        },

        submit: function(){
            let params = new FormData();
            params.append("title", this.timeline.title);
            params.append("description", this.timeline.description);
            params.append("cover_picture", this.timeline.cover_picture);
            params.append("creation_date", this.timeline.creation_date);

            // Appel Ajax via axios ajout de l'oeuvre
            axios.post("http://localhost/projets2/backend/createTimeline.php", params)
                // Réponse et récupération des données
                .then(response => {
                    console.log(response);
                    this.$router.push('/Timeline');
                })
                // Cas d'erreur
                .catch(error => {
                    console.log("Erreur : ", error);
                })
        }
    }
});