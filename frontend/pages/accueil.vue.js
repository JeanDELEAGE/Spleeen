var Accueil = Vue.component('Accueil', {
    template: `
<div class="accueil">
        <div class="intro z-3">
            <div class="intro_content d-block mid-w m-0-auto t-align-c">
                 <h1>Redécouvrez votre musique</h1>
                 <p class="prl15p">Composez sans limite, avec vos photos et textes, une timeline unique de musiques interactive. Utilisez la puissance de vos sons
                 préférés pour vous remémorer souvenirs intenses.</p>
                 <img src="img/timeline.png" alt="Éditeur de timeline">
            </div>
        </div>
<!--        <div class="blur p-absolute z-2"></div>-->
        <div class="d-grid" id="timelines">
            <div class="span-12">
                <h1>Mes timelines</h1>
                <p>Choisissez une timeline pour la consulter, la partager, ou la modifier.</p>
            </div>
            <div class="timeline_card d-flex flex-d-column span-4" v-for="timeline in listTimelines" @click="(select(timeline))">
                 <div class="img-container"><img :src="timeline.cover_picture" :alt="timeline.title"></div>
                 <div class="d-flex flex-d-column just-c-spe align-i-f-s tweet t-purple-dark bc-green-light br-5 just-c-spa prl-1-5">
                     <h4>{{timeline.title}}</h4>
                     <p>{{timeline.description}}</p>
                 </div>
                 <router-link :to="{ name: 'Timeline'}">
                    <button class="buttons">Consulter cette timeline</button>
                </router-link>
            </div>
          
            <button class="buttons add-sheet d-flex just-c-c align-i-c m-auto-0 bc-purple-dark-ultra" id="addSheet"><router-link :to="{ name: 'CreateTimeline'}"><img src="img/add_music.svg" alt="add_music" width="100%" height="100%"></router-link></button>
        </div>
        
        <div class="popup d-none">
        <img :src="timelineSelected.cover_picture" :alt="timelineSelected.title"/>
            <div>
                <h4>{{timelineSelected.title}}</h4>
                <p>15/50</p>
            </div>
            <div>
                <p>{{timelineSelected.date}}</p>
                <p>Description de votre timeline</p>
                <p>{{timelineSelected.description}}</p>
                <p>359/400</p>
                <div>
                    <button class="greenbutton">Modifier</button>
                    <button class="redbutton">Supprimer</button>
                </div>
            </div>
        </div>
        <div class="blur p-absolute d-none"></div> 
</div>
    `,
    data() {
        return {
            listTimelines: [],
            timelineSelected: {
                id: 0,
                title: null,
                description: null,
                cover_picture: null,
                creation_date: null,
                theEditor: null,
                theMusicSheets: null
            }
        }
    },
    mounted() {
        axios.get('http://localhost/projets2/backend/controllers/listTimelines.php')
            .then(response => {
                this.listTimelines = response.data;
                console.log("this is content", response.data);
            })
            .catch(function (error) {
                console.log(error);
            })

    },
    methods: {
        select(timeline) {
            this.timelineSelected = timeline;
            console.log("Timeline selectionnée", this.listTimelines.data);
        }
    }
});
