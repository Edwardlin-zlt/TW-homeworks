<?php
$arr = array ('sample'=> array ( 'txt'=> "this is our sample JSONP data" ));
echo $_GET['callback'].'('.json_encode($arr).')'; 
?> 