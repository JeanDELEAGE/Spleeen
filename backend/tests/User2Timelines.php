<?php
    require_once("../classes/class.User.php");
    require_once('../classes/class.Timeline.php');

    //Créer l'utilisateur
    $user1 = new User (
        1,
        "guillaume.breton@gmail.com",
        "guillaume.breton",
        "jesuislepremierutilisateur",
        "Guillaume",
        "Breton",
        "1989-06-24",
        "",
        "Bonjour, je m'appelle Guillaume Breton et je suis le tout premier utilisateur de la plateforme Spleen.",
        "true"
    );

    //Créer les timelines crées
    $timeline1 = new Timeline(
        1,
        "Souvenirs d'enfance",
        "Cette timeline est composée des musiques que j'écoutais au lycée et au collège.",
        "",
        "2021-05-01"
    );
    $timeline2 = new Timeline(
        2,
        "Pour Mélanie",
        "Petite timeline que je vais partager à ma meilleure amie Mélanie.",
        "",
        "2021-05-01"
    );

    //Tableau des timelines
    $listeTimelines = array();
    $listeTimelines[] = $timeline1;
    $listeTimelines[] = $timeline2;

    //Charger les timelines sur l'utilisateur
    $user1->setTheCreatedTimelines($listeTimelines);

    echo "<pre>";
    print_r($user1);
    echo "<pre/>";
?>