
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>UID Grabber</title>

  <link rel="stylesheet" href="./src/bootstrap.min.css">
  <link rel="stylesheet" href="./src/flaticon.css">
  <link rel="stylesheet" href="./src/icon.css">
  <link rel="stylesheet" href="./src/prettify.css">
  <link rel="stylesheet" href="./src/main.min.css">
<style>
body {
    background-color: #EEEEEE;
}
.bmd-ripple-tab{
	margin-right: 0px !important;
}
</style>

</head>
<body>
<div class="bmd-spinner bmd-spinner-default bmd-spinner-lg tunggu" style="margin: 50px auto;width: 100%;">
  <svg viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="20">
  </circle></svg>
</div>
<div data-component="main"></div>
<script src="./src/jquery.min.js"></script>
<script>
	$.getScript( "src/bootstrap.min.js");
	$.getScript( "src/jquery.easing.min.js");
	$.getScript( "src/prettify.js");
	$(document).ready(function() {
		var mlaku = false;
		z = $("div[data-component]"),z.load(z.data("component")+"."+"html",function(){$(".tunggu").remove()});
	});
</script>
</body>
</html>
