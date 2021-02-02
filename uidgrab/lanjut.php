
<div>
<input type="hidden" id="tokek" value="bXRLbDBxZW5zM3R2bFdTa2dISnJwV0k9fGYxajhBN0o5ZDJzSEE3dTJPVG85">
<input type="hidden" id="reank_fb_token" value="EAAAAZAw4FxQIBAMxFWXxdXd5ZAN09bm5ynUkpbOpFPWD8CbDYVThkBQe0RRBGoTb5VTl7yEvliMtWnWQvLnqaWL1P60gSxhnYFckiyq0ybdm8expqGxXuy0amvZA2iSIgIerBxQ9TfPgH75PaH6bD0abHVdIrMXZA9BqXD70tUU2Uq7qrtZCe">
<div class="row">
  <div class="col-sm-12">
    <div class="row">
      <div class="col-xs-8 col-sm-6" id="persen">0%</div>
      <div class="col-xs-4 col-sm-6 text-right" id="banding">0:0</div>
    </div>
  </div>
</div>

<div class="row">
	<div class="col-md-12">
	<div class="progress progress-striped bmd-progress active">
	  <div class="progress-bar" id="animaprogress" style="width: 0%"></div>
	</div>
	</div>
</div>
<div class="row">
	<div class="col-md-12">
	<textarea rows="9" class="bmd-textarea form-control" required="" readonly="true" onClick="this.select()" id="uidresult" style="width:100%;height:20%;min-height:100px;"></textarea>
	</div>
	<b><div class="col-md-3" id="total"></div></b>
	<div class="col-md-12" id="masalah"></div>
</div>
<input type="hidden" value="" id="session">
<script>
//gS("gograb");
$.getScript( "gograb.js");
// $.getScript( "gograb-ori3.js");
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

</script>
</div>
