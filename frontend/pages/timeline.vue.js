var Timeline = Vue.component('Timeline', {
    template: `
    <div class="editor">
        <div class="timeline-header d-grid">
            <div class="user-mode grs-1 gcs-1 span-11">
                <p>Visualisation</p>
            </div>
            
            <button class="whitebutton t-maj grs-1 gcs-1 span-1" onclick="window.location.href = 'timeline-modification.vue.js';">Modifier</button>
    
            <div class="timeline-informations grs-2 gcs-1 span-6">
                <h1>timeline.title</h1>
                <p>timeline.description</p>
            </div>
    
            <div class="controller grs-2 span-6 d-flex just-c-f-e m-auto-0 gap2">
                <router-link :to="{ name: 'CreateMusicsheet'}">
                    <button class="buttons add-sheet d-flex just-c-c align-i-c m-auto-0 bc-purple-dark-ultra m-auto-0" id="addSheet" style="width: 53px; height: 53px"><img
                    src="img/plus.svg" alt="add_music" width="100%" height="100%"></button>
                </router-link>
                <button class="whitebutton share-button">Share</button>
                 
            </div>
        </div>
        <div class="timeline-content horizontal-scroll-wrapper">
            <div id="card" class="grid_timeline">
                <div class="card bc-purple" v-for="musicsheet in listMusicsheets" style="--dist:0;">
                   <div style="left: 0; width: 100%; height: 80px; position: relative;">
                        <iframe src="https://open.spotify.com/embed/track/7MKJfTaBcB7OvZyCDaRUSx"
                        style="top: 0; left: 0; width: 100%; height: 100%; position: absolute;
                        border: 0;" allowfullscreen allow="encrypted-media">
                        </iframe>
                   </div>
                   
                    <div class="img-container"><img :src="musicsheet.cover_picture" :alt="musicsheet.title" class="musicsheet-img" style="width: 100%; max-height: 100%; border-radius: 0 0 10% 10% "></div>
                    <div class=" prl-1-5">
                        <span style="margin-top: 1.5rem" class="t-purple-dark-ultra">{{musicsheet.creation_date}}</span>
                        <h3>{{musicsheet.title}}</h3>
                        <p class="d-block ox-none">{{musicsheet.description}}</p>
                    </div>
                    <button class="openEdit">Modifier</button>
                </div>
               
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            listTimelines: [],
            listMusicsheets: [],
            musicsheetSelect: {
                id: 0,
                title: null,
                description: null,
                cover_picture: null,
                creation_date: null,
                song: null,
                theTimelines: []
            },
        }
    },
    mounted() {
        axios.get('http://localhost/projets2/backend/controllers/listTimelines.php')
            .then(response => {
                this.listTimelines = response.data;
                console.log(this.listTimelines);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get('http://localhost/projets2/backend/controllers/listMusicsheets.php')
            .then(response => {
                this.listMusicsheets = response.data;
                console.log(this.listMusicsheets);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    methods: {
        select: function (musicsheet) {
            this.musicsheetSelect = musicsheet;
        }
    }
});
