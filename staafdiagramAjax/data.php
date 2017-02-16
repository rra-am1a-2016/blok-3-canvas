<?php
// Haal alle records uit de tabel en echo deze in een jsonstring naar het scherm.
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "am1a-2016-grafiek";
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    $query = "SELECT * FROM `users`";

    $resource = mysqli_query($conn, $query);

    $resultArray = mysqli_fetch_all($resource, MYSQLI_ASSOC);

    echo json_encode($resultArray);
?>