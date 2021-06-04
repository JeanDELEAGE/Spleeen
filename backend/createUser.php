<?php
header("Access-Control-Allow-Headers:*");
header("Access-Control-Allow-Origin:*");
    require_once 'cnx.php';
    $pdo->beginTransaction();
    $sql = "INSERT INTO users(username,user_email,user_password) VALUES(?, ?, ?)";
    $requete = $pdo->prepare($sql);

    $requete->bindValue(1, $_POST["username"]);
    $requete->bindValue(2, $_POST["user_email"]);
    $requete->bindValue(3, $_POST["user_password"]);

    if ($requete->execute()) {
        echo json_encode(['success'=>true, "content"=> $pdo->lastInsertId()]);
    } else {
        echo json_encode($requete->errorInfo());
    }
?>