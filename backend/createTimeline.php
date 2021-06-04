<?php
header("Access-Control-Allow-Headers:*");
header("Access-Control-Allow-Origin:*");
    require_once 'cnx.php';
    $pdo->beginTransaction();
    $sql = "INSERT INTO timelines(timeline_cover_picture,timeline_title,timeline_creation_date, timeline_description) VALUES(?, ?, ?, ?)";
    $requete = $pdo->prepare($sql);

    $requete->bindValue(1, $_POST["timeline_cover_picture"]);
    $requete->bindValue(2, $_POST["timeline_title"]);
    $requete->bindValue(3, $_POST["timeline_creation_date"]);
    $requete->bindValue(4, $_POST["timeline_description"]);

    if ($requete->execute()) {
        echo json_encode(['success'=>true, "content"=> $pdo->lastInsertId()]);
    } else {
        echo json_encode($requete->errorInfo());
    }
?>