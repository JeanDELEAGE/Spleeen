<?php
    header("Access-Control-Allow-Origin: *");

    require_once '../cnx.php';
    require_once '../classes/class.Musicsheet.php';

    //Liste des utilisateurs
    $sql = "SELECT * FROM musicsheets";
    //Préparation de la requête
    $request = $pdo->prepare($sql);
    //Tableau qui contiendra la liste
    $list = array();

    //Si la requête renvoie quelque chose
    if ($request->execute()) {
        //Parcours des résultats
        while ($data = $request->fetch()) {

            $musicsheet = new Musicsheet (
                $data['musicsheet_id'],
                $data['musicsheet_title'],
                $data['musicsheet_description'],
                'img/musicsheets/'.$data['musicsheet_cover_picture'],
                $data['musicsheet_creation_date'],
                $data['musicsheet_song']
            );

            $list[] = $musicsheet;
        }
    }

    //Encodage et affichage du flux JSON
    echo json_encode($list);
    exit();
?>