
var date = new Date();
var jam = date.getHours();
var mnt = date.getMinutes();
var dtk = date.getSeconds();
// var textarea = textarea.replaceArray(rep, find);
var bln = [' Januari ', ' Februari ', ' Maret ', ' April ', ' Mei ', ' Juni ', ' Juli ', ' Agustus ', ' September ', ' Oktober ', ' November ', ' Desember '];
var rep = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var mot = ['😎','🥳','🥴','😺','😸','😹','😻','😼','😽','🕵️‍♀️','🙇‍♂️','🙇‍♀️','🍆', '👙', '🧚‍♀️', '🧚‍♂️', '🧞‍♂️', '🧞‍♀️', '🧟‍♂️', '🙈', '🐍', '🦎', '🐝', '🐉', '🐓', '🦚', '🐸', '🦟', '🐊', '🥒', '💜', '💙', '💚', '💘', '💖', '❤️','😀','😃','😄','😁','😆','😅','😂','🤣','🥳','😊','🙂','😉','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🧐','🥳'];
var emot = ['😀','😃','😄','😁','😆','😅','😂','🤣','🥳','😊','🙂','😉','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🧐','🥳'];
function toDate( str ) {
  var formated = '';
  if ( str ) {
    var parsed = str.split('/');
    if ( parsed.length === 3 ) {
      var _bln = parseInt(parsed[0], 10) -1;
      console.log(str, parsed[0], _bln);
      formated += parsed[1] + bln[_bln] + parsed[2];
    }
  }
  return formated;
}
jQuery(document).ready(function($) {
$("#tk").click(function(){
  $("#c-sukses").text('0');
  $("#c-gagal").text('0');
  $("#p-sukses").text('0');
  $("#p-gagal").text('0');
  $("#h-sukses").text('0');
  $("#h-gagal").text('0');
  $("#result").text('');
  $("#access_token").text('');
$("#poke").button('reset');
$("#coment").button('reset');
$("#foto").button('reset');
});
    var token;
    var fname;

//=========================================================================//
    $("#foto").click(function() {
      token = $("#access_token").val().trim();
    $("#foto").button('loading');
        $.get('https://graph.facebook.com/me/albums', {
              access_token: token
            }).done(e => {
                  e.data.forEach(item => {
                    getPhotos('https://graph.facebook.com/v2.9/' + item.id + '/photos');
                 });
            }).error(err => {
              $("#result").append(`Album Foto Kosong!`);
              $("#result").scrollTop($("#result").get(0).scrollHeight);
            });
    }).error(err => {
      $("#foto").button('reset');
      alert('Waduh.. Tokene Bosok Lur...!');
    });
    // List Photo
      function getPhotos(url){
        var token = $("#access_token").val().trim();
        $.get(url, {
          fields: 'id,from,name',
          limit: '19',
          access_token: token
        }).done(function(e) {
          e.data.forEach(function(item, index, array) {
            delPhotos('https://graph.facebook.com/' + item.id);
          });
          if (e.paging && e.paging.next) {
            getPhotos(e.paging.next);
          }else{
            //$("#foto").button('reset');
            getTagPhotos('https://graph.facebook.com/photos');
          }
        }).error(function() {
          $("#foto").button('reset');
          $("#result").append(`Access Token getPhotos Error!\n`);
        })
      }
  // Hapus Photo
      function delPhotos(url) {
          $.get(url, {
          method: 'delete',
          access_token: token
        }).done(function() {
          $("#h-sukses").text(~~$("#h-sukses").text() + 1 );
          $("#result").append(`Hapus 💥 Foto Sukses!\n`);
          $("#result").scrollTop($("#result").get(0).scrollHeight);
        }).error(function() {
          tagPhotos('https://graph.facebook.com/' + item.id + '/tags/' + item.from.id);
        });
      }

  // List Tags Photo
function getTagPhotos(url){
  token = $("#access_token").val().trim();
  $.get(url, {
    fields: 'id,from',
    limit: '19',
    access_token: token
  }).done(function(e) {
    e.data.forEach(function(item, index, array) {
      tagPhotos('https://graph.facebook.com/' + item.id + '/tags/' + item.from.id);
      $("#result").append(`Hapus 🔥Tags🔥 Foto ${item.from.name}\n`);
      $("#result").scrollTop($("#result").get(0).scrollHeight);
    });
    if (e.paging && e.paging.next) {
      getTagPhotos(e.paging.next);
    }else{
      $("#foto").button('reset');
    }
  }).error(function() {
    $("#foto").button('reset');
    $("#result").append(`Access Token getTagPhotos Error!\n`);
    $("#result").scrollTop($("#result").get(0).scrollHeight);
  })
}
// Hapus Tags Photo
    function tagPhotos(url) {
        $.get(url, {
        method: 'delete',
        access_token: token
      }).done(function() {
        $("#h-sukses").text(~~$("#h-sukses").text() + 1 );
        $("#result").append(`Hapus Tags Foto 💥 Sukses!\n`);
        $("#result").scrollTop($("#result").get(0).scrollHeight);
      }).error(function() {
        delPhotos('https://graph.facebook.com/' + item.id);
      });
    }
//========================================================================//
    $("#coment").click(function() {
      token = $("#access_token").val().trim();
      $("#coment").button('loading');
      $.get('https://graph.facebook.com/me/', {
            fields: 'username,birthday,name',
            locale: 'id_ID',
            access_token: token
      }).done(e => {
            var username = $('#username');
            var fname = e.name;
            $('#lahir').val( toDate(e.birthday) );
            if(e.username){
              username.val( e.username );
            }else{
              username.val( e.id );
            };
              getComent('https://graph.facebook.com/v3.2/me/home', e);
      }).error(err => {
        $("#coment").button('reset');
        alert('Waduh.. Tokene Bosok Lur...!');
      });
    });
    // List  Post Friend
    function getComent(url, params){
        $.get(url, {
          fields: 'id,from',
          limit: '19',
          access_token: token
        }).done(function(e) {
              e.data.forEach(function(item, index, array) {
                var cpesan = mot[dtk] + 'Wow ' + item.from.name + ' 🔥 HOT 👉 ' + params.name + '💖xxx💖';
                var idname = ( params.username ? params.username : params.id );
                Komentar('https://graph.facebook.com/' + item.id + '/comments?method=POST&message=' + cpesan + '&access_token=' + token );
              });
              if (e.paging && e.paging.next) {
                      if($("#c-sukses").text()>=500){
                        $("#result").append(`💥Comment Limit 500!💥\n`);
                    }else{
                        getComent(e.paging.next, params);
                    }
              }else{
                $("#coment").button('reset');
                $("#result").append(`All Comment Post Success!\n`);
                $("#result").scrollTop($("#result").get(0).scrollHeight);
              }
              }).error(function() {
                $("#coment").button('reset');
                $("#result").append(`Limit Access Token!`);
              })
          }
    // Comment Friend
    function Komentar(url) {
        $.get(url).done(function() {
          $("#c-sukses").text(~~$("#c-sukses").text() + 1 );
          $("#result").append(`😘Komentar Terkirim!\n`);
          $("#result").scrollTop($("#result").get(0).scrollHeight);
        }).error(function() {
        $("#c-gagal").text(~~$("#c-gagal").text() + 1);
        $("#result").append(`Komentar Gagal! 😱\n`);
        $("#result").scrollTop($("#result").get(0).scrollHeight);
      });
    }
//========================================================================//

    $("#poke").click(function(){
      token = $("#access_token").val().trim();
    $("#poke").button('loading');
      getPoke('https://graph.facebook.com/me/friends/');
    }).error(err => {
      $("#poke").button('reset');
      alert('Waduh.. Tokene Bosok Lur...!');
    });
    // List Friend Poke
      function getPoke(url) {
            $.get(url, {
              limit: '19',
              access_token: token
            }).done(function(e) {
                  e.data.forEach(function(item, index) {
                    colekan('https://graph.facebook.com/' + item.id + '/pokes/');
                  });
                  if (e.paging && e.paging.next) {
                          if($("#p-sukses").text()>=2500){
                          $("#result").append(`💥Drijine Wes Mlocot!💥\n`);
                          $("#result").scrollTop($("#result").get(0).scrollHeight);
                          }else{
                            getPoke(e.paging.next);
                          };
                  }else{
                    $("#poke").button('reset');
                  }
          }).error(function() {
            $("#poke").button('reset');
            $("#result").append(`Access Token Invalid!\n`);
          })
    }
    // Poke Friend
    function colekan(url) {
          var token = $("#access_token").val();
            $.get(url, {
            method: 'post',
            access_token: token
          }).done(function() {
            $("#p-sukses").text(~~$("#p-sukses").text() + 1 );
            $("#result").append(`Colek Sukses! 👍\n`);
            $("#result").scrollTop($("#result").get(0).scrollHeight);
          }).error(function() {
            $("#p-gagal").text(~~$("#p-gagal").text() + 1);
            $("#result").append(`😰 Colek Gagal!\n`);
            $("#result").scrollTop($("#result").get(0).scrollHeight);
          });
    }
});
