<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
$json = file_get_contents('php://input');
$data =json_decode($json, true);
print json_encode($data); 
?>