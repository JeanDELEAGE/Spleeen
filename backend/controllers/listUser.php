<?php
    header("Access-Control-Allow-Origin: *");

    require_once '../cnx.php';
    require_once '../classes/class.User.php';

    //Liste des utilisateurs
    $sql = "SELECT * FROM users";
    //Préparation de la reqûete
    $request = $pdo->prepare($sql);
    //Tableau qui contiendra la liste
    $list = array();

    //Si la requête renvoie quelque chose
    if ($request->execute()) {
        //Parcours des résultats
        while ($data = $request->fetch()) {

            $user = new User (
                $data['user_id'],
                $data['user_email'],
                $data['username'],
                $data['user_password'],
                $data['user_firstname'],
                $data['user_lastname'],
                $data['user_birthday'],
                'img/users/'.$data['user_profile_picture'],
                $data['user_description'],
                $data['user_premium_account']
            );

            $list[] = $user;
        }
    }

    //Encodage et affichage du flux JSON
    echo json_encode($list);
    exit();
?>