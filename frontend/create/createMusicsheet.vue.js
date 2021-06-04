var CreateMusicsheet = Vue.component('CreateMusicsheet', {
    template:`
<div class="accueil">
    <div class="container" style="max-width: 80vh; padding-bottom: 20vh">
    <form id="el" @submit.prevent="submit" class="m-0-auto">
        <div class="card-header">
            <h1 class="t-align-c t-white">Ajouter une fiche !</h1>
            <p class="t-align-c">Vous êtes arrivé ici par erreur ? <router-link :to="{ name: 'Timeline'}"><span class="t-green"> Revenir en arrière</span></router-link></p>  
        </div>

        <br/>
        <div class="input-group">
            <input
                    type="text"
                    maxlength="255"
                    class="form-control"
                    placeholder="Image de couverture"
                    v-model="musicsheet.cover_picture"
                    required>
        </div>

        <br/>
        <div class="input-group">
            <input
                    type="url"
                    maxlength="255"
                    class="form-control"
                    placeholder="Coller le lien vers le titre souhaité"
                    v-model="musicsheet.song"
                    required>
        </div>

        <br/>
        <div class="input-group">
            <input
                    type="date"
                    class="form-control"
                    placeholder="DATE"
                    v-model="musicsheet.creation_date"
                    required>
        </div>

        <br/>
        <div class="input-group">
            <input
                    type="text"
                    maxlength="50"
                    class="form-control"
                    placeholder="TITRE"
                    v-model="musicsheet.title"
                    required>
        </div>
        
        <br/>
        <div class="input-group">
            <input
                    type="text"
                    maxlength="255"
                    class="form-control"
                    placeholder="Description de voter timeline (500 caractère maximum)"
                    v-model="musicsheet.description"
                    required>
        </div>
        <br/>
        <button type="submit" class="btn btn-primary float-right">S'inscrire</button>
    </form>
</div>
</div>
    `,
    data(){
        return {
            imageData:{},
            musicsheet:{
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
        submit: function(){
            let params = new FormData();
            params.append("cover_picture", this.musicsheet.cover_picture);
            params.append("song", this.musicsheet.song);
            params.append("creation_date", this.musicsheet.creation_date);
            params.append("title", this.musicsheet.title);
            params.append("description", this.musicsheet.description);

            axios.post('http://localhost/projets2/backend/createMusicsheet.php', params)
                .then(response => {
                    console.log("Retour de la promesse : ", response);
                    this.$router.push('/timeline');
                    console.log(response.data);
                })
                .catch(function(error){
                    console.log(error);
                })
        }
    }
});