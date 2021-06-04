var Propos = Vue.component('Propos', {
    template:`
    <div class="a-propos">
        <div class="projet-unique">
            <h1>SPLEEEN</h1>

            <h3>Un projet unique</h3>

            <div class="idee" data-aos="fade-in">
                <h4>Observer un besoin, avoir une idée</h4>

                <p>Créer une playlist ? Écrire un journal intime ? Offrir un
                    album
                    photos personnalisé ? Et pourquoi
                    ne pas proposer un outil qui permet de tout faire ? Notre
                    réponse : Spleeen.</p>
            </div>

            <div class="equipe" data-aos="fade-up">
                <h4>Composer une équipe de passionnés</h4>

                <p>Spleeen, c'est l'idée de 3 étudiants en DUT MMI à
                    Montbéliard, tous passionnés par la musique, le design et
                    l'informatique.</p>
            </div>

            <div class="projet" data-aos="fade-up">
                <h4>Proposer un projet qui vous correspond</h4>

                <p>Spleeen s'adapte à vos besoins, c'est pourquoi nous avons
                    conçu
                    une interface ludique et des
                    offres Premium pour mieux profiter de nos outils.</p>
            </div>
        </div>

        <div class="equipe-vous-aider">
            <h3>Une équipe, pour vous aider</h3>

            <ul>
                <li id="claire">
                    <figure><img src="img/claireoudot.jpg"
                                 alt="Claire Oudot, communicante">
                        <figcaption>
                            <span>COMMUNICATION</span>
                            Claire Oudot
                        </figcaption>
                    </figure>
                </li>
                <li id="sebastian">
                    <figure><img src="img/sebastianchevallier.jpg"
                                 alt="Sebastian Chevallier, développeur web">
                        <figcaption>
                            <span>DÉVELOPPEMENT</span>
                            Sebastian Chevallier
                        </figcaption>
                    </figure>
                </li>
                <li id="jean">
                    <figure><img src="img/jeandeleage.jpg"
                                 alt="Jean Deléage, graphiste">
                        <figcaption>
                            <span>GRAPHISME</span>
                            Jean Deléage
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </div>
    </div>
    `,
    data(){
        return{
        }
    },
    mounted(){

    },
    methods:{

    }
})