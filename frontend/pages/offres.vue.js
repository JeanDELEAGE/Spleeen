var Offres = Vue.component('Offres', {
    template:`
    <div class="offres">
        <h3>Nos offres</h3>

        <p>Spleeen est un service gratuit qui vous permet de créer vos timelines
            et de les partager. Cependant, vous pouvez bénéficier d'une édition
            sans limite grâce à notre offre Premium.</p>

        <div class="offre-freemium">
            <h4>Compte standard</h4>
            <p>Pour utiliser nos services gratuitement.</p>
            <ul>
                <li>2 timelines maximum</li>
                <li>50 musiques par timeline maximum</li>
                <li>Image de couverture</li>
            </ul>
            <a href="">En savoir plus</a>
            <hr/>
            <p><span>0,00 €</span>gratuit</p>
        </div>

        <div class="offre-premium">
            <h4>Compte premium</h4>
            <p>Pour une utilisation sans limite de nos services.</p>
            <ul>
                <li>Nombre de timeline illimité</li>
                <li>Nombre de musiques illimité</li>
                <li>Ajout de vidéos disponible</li>
            </ul>
            <a href="">En savoir plus</a>
            <hr/>
            <p><span>2,99 €</span>/ mois</p>
        </div>

        <button class="greenbutton" onclick="window.location.href = 'paiement.vue.js';">
            Mettre à niveau
        </button>
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