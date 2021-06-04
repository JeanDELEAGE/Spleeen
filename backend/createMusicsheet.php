<?php
header("Access-Control-Allow-Headers:*");
header("Access-Control-Allow-Origin:*");
require_once 'cnx.php';
$pdo->beginTransaction();
$sql = "INSERT INTO musicsheets(cover_picture,song,creation_date,title,description) VALUES(?, ?, ?, ?, ?)";
$requete = $pdo->prepare($sql);

$requete->bindValue(1, $_POST["cover_picture"]);
$requete->bindValue(2, $_POST["song"]);
$requete->bindValue(3, $_POST["creation_date"]);
$requete->bindValue(4, $_POST["title"]);
$requete->bindValue(5, $_POST["description"]);

if ($requete->execute()) {
    echo json_encode(['success'=>true, "content"=> $pdo->lastInsertId()]);
} else {
    echo json_encode($requete->errorInfo());
}
?>