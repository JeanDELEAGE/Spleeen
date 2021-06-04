<?php
    header("Access-Control-Allow-Origin: *");

    require_once __DIR__ . '\..\cnx.php';
    require_once  __DIR__ . '\..\classes\class.Timeline.php';


    //Liste des utilisateurs
    $sql = "SELECT * FROM timelines";
    //Préparation de la requête
    $request = $pdo->prepare($sql);
    //Tableau qui contiendra la liste
    $list = array();

    //Si la requête renvoie quelque chose
    if ($request->execute()) {
        //Parcours des résultats
        while ($data = $request->fetch()) {

            $timeline = new Timeline (
                $data['timeline_id'],
                $data['timeline_title'],
                $data['timeline_description'],
                'img/timelines/'.$data['timeline_cover_picture'],
                $data['timeline_creation_date']
            );

            $list[] = $timeline;
        }
    }

    //Encodage et affichage du flux JSON
    echo json_encode($list);
    exit();
?>