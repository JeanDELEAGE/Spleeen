<?php

$parametres = parse_ini_file(__DIR__. "\param\param.ini");

//Conexion à la BDD avec fichier de paramètres
$pdo = new PDO (
    $parametres['dsn'],
    $parametres['user'],
    $parametres['psw']
);

//Adresse serveur de l'application
$host = $parametres['host'];

?>

