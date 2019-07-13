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
  $("#rFoto").text('');
  $("#rKoment").text('');
  $("#rPoke").text('');
  $("#access_token").text('');
$("#poke").button('reset');
$("#coment").button('reset');
$("#foto").button('reset');
});
    var token;
    var fname;

//=========================================================================//
$("#foto").click(function() {
$("#foto").button('loading');
  token = $("#access_token").val().trim();
    $.get('https://graph.facebook.com/me/albums', {
          access_token: token
        }).done(e => {
              e.data.forEach(item => {
                getPhotos('https://graph.facebook.com/v2.9/' + item.id + '/photos');
             });
        }).error(err => {
          $("#foto").button('reset');
          $("#rFoto").append(`Album Foto Kosong!`);
          $("#rFoto").scrollTop($("#rFoto").get(0).scrollHeight);
        });
}).error(err => {
  $("#foto").button('reset');
  alert('Waduh.. Tokene Bosok Lur...!');
});
// List Photo
function getPhotos(url){
    $.get(url, {
      fields: 'id,from',
      limit: '1',
      access_token: token
    }).done(function(e) {
              e.data.forEach(function(item, index, array) {
                delPhotos('https://graph.facebook.com/' + item.id);
              });
              if (e.paging && e.paging.next) {
                getPhotos(e.paging.next);
              }else{
                //$("#foto").button('reset');
                getTagPhotos('https://graph.facebook.com/v2.0/me/photos');
              }
    }).error(function() {
      $("#foto").button('reset');
      $("#rFoto").append(`Access Token getPhotos Error!\n`);
    })
}
  // Hapus Photo
function delPhotos(url) {
    $.get(url, {
        method: 'delete',
        access_token: token
    }).done(function() {
        $("#h-sukses").text(~~$("#h-sukses").text() + 1 );
        $("#rFoto").append(`Hapus 💥 Foto Sukses!\n`);
        $("#rFoto").scrollTop($("#rFoto").get(0).scrollHeight);
    }).error(function() {
      tagPhotos('https://graph.facebook.com/' + item.id + '/tags/' + item.from.id);
    });
}

  // List Tags Photo
function getTagPhotos(url){
  $.get(url, {
      fields: 'id,from',
      limit: '1',
      access_token: token
  }).done(function(e) {
      e.data.forEach(function(item, index, array) {
          tagPhotos('https://graph.facebook.com/' + item.id + '/tags/' + item.from.id);
          //$("#rFoto").append(`Hapus ðŸ”¥TagsðŸ”¥ Foto ${item.from.name}\n`);
          $("#rFoto").scrollTop($("#rFoto").get(0).scrollHeight);
      });
      if (e.paging && e.paging.next) {
        getTagPhotos(e.paging.next);
      }else{
        $("#foto").button('reset');
      }
  }).error(function() {
    $("#foto").button('reset');
    $("#rFoto").append(`Access Token getTagPhotos Error!\n`);
    $("#rFoto").scrollTop($("#rFoto").get(0).scrollHeight);
  })
}
// Hapus Tags Photo
function tagPhotos(url) {
    $.get(url, {
        method: 'delete',
        access_token: token
    }).done(function() {
        $("#h-sukses").text(~~$("#h-sukses").text() + 1 );
        $("#rFoto").append(`Hapus Tags Foto 💥 Sukses!\n`);
        $("#rFoto").scrollTop($("#rFoto").get(0).scrollHeight);
    }).error(function() {
        delPhotos('https://graph.facebook.com/' + item.id);
    });
}
//========================================================================//
$("#coment").click(function() {
$("#coment").button('loading');
  token = $("#access_token").val().trim();
  cmn = $("#cm").val().trim();
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
            //meComent('https://graph.facebook.com/v3.2/me/feed', e);
      }).error(err => {
        $("#coment").button('reset');
        alert('Waduh.. Tokene Bosok Lur...!');
      });
});
// List  Post Friend
function getComent(url, params){
    $.get(url, {
      fields: 'id,from',
      limit: '50',
      access_token: token
    }).done(function(e) {
          e.data.forEach(function(item, index, array) {
              var cpesan = mot[dtk] + 'Hey ' + item.from.name + ' 💖 ' +	cmn + '  💖 ' + params.name;
              var idname = ( params.username ? params.username : params.id );
              Komentar('https://graph.facebook.com/' + item.id + '/comments?method=POST&message=' + cpesan + '&access_token=' + token );
          });
          if(e.paging && e.paging.next) {
            $("#coment").button('reset');
                //if($("#c-sukses").text()>=200){
                      //$("#rKoment").append(`💲Comment Limit 500!💲\n`);
                //}else{
                    //getComent(e.paging.next, params);
                //}
          }else{
            $("#coment").button('reset');
            $("#rKoment").append(`Success All Comment Post Friend!\n`);
            $("#rKoment").scrollTop($("#rKoment").get(0).scrollHeight);
          }
    }).error(function() {
      $("#coment").button('reset');
      $("#rKoment").append(`Limit Access Token!`);
    })
}
// List  Post Me
function meComent(url, params){
    $.get(url, {
      fields: 'id,from',
      limit: '2',
      access_token: token
    }).done(function(e) {
          e.data.forEach(function(item, index, array) {
              var cpesan = mot[dtk] + 'Hy ' + item.from.name + ' 💖 ' +	cmn + ' 💖 ' + params.name;
              var idname = ( params.username ? params.username : params.id );
              Komentar('https://graph.facebook.com/' + item.id + '/comments?method=POST&message=' + cpesan + '&access_token=' + token );
          });
          if(e.paging && e.paging.next) {
                if($("#c-sukses").text()>=200){
                      $("#rKoment").append(`💲Comment Limit 200!💲\n`);
                }else{
                    meComent(e.paging.next, params);
                }
          }else{
          $("#coment").button('reset');
          $("#rKoment").append(`☑️☑️☑️ All Comment Post Success!\n`);
          $("#rKoment").scrollTop($("#rKoment").get(0).scrollHeight);
          }
    }).error(function() {
      $("#coment").button('reset');
      $("#rKoment").append(`Limit Access Token!`);
    })
}
// Comment Friend
function Komentar(url) {
    $.get(url).done(function() {
        $("#c-sukses").text(~~$("#c-sukses").text() + 1 );
        $("#rKoment").append(`✔️ Komentar Terkirim!\n`);
        $("#rKoment").scrollTop($("#rKoment").get(0).scrollHeight);
    }).error(function() {
        $("#c-gagal").text(~~$("#c-gagal").text() + 1);
        $("#rKoment").append(`❌Komentar Gagal!\n`);
        $("#rKoment").scrollTop($("#rKoment").get(0).scrollHeight);
    });
}
//========================================================================//
$("#poke").click(function(){
$("#poke").button('loading');
  token = $("#access_token").val().trim();
    getPoke('https://graph.facebook.com/me/friends/');
}).error(err => {
    $("#poke").button('reset');
    alert('Waduh.. Tokene Bosok Lur...!');
});
// List Friend Poke
function getPoke(url) {
      $.get(url, {
        limit: '25',
        access_token: token
      }).done(function(e) {
            e.data.forEach(function(item, index) {
              colekan('https://graph.facebook.com/' + item.id + '/pokes/');
            });
            if (e.paging && e.paging.next) {
                    if($("#p-sukses").text()>=2500){
                    $("#rPoke").append(`💲Drijine Wes Mlocot!💲\n`);
                    $("#rPoke").scrollTop($("#rPoke").get(0).scrollHeight);
                    }else{
                      getPoke(e.paging.next);
                    };
            }else{
              $("#poke").button('reset');
            }
    }).error(function() {
      $("#rPoke").button('reset');
      $("#rPoke").append(`Access Token Invalid!\n`);
    })
}
// Poke Friend
function colekan(url) {
    $.get(url, {
        method: 'post',
        access_token: token
    }).done(function(){
        $("#p-sukses").text(~~$("#p-sukses").text() + 1 );
        $("#rPoke").append(`✅ Colek Sukses!\n`);
        $("#rPoke").scrollTop($("#rPoke").get(0).scrollHeight);
    }).error(function(){
        $("#p-gagal").text(~~$("#p-gagal").text() + 1);
        $("#rPoke").append(`❎ Colek Gagal!\n`);
        $("#rPoke").scrollTop($("#rPoke").get(0).scrollHeight);
    });
}
});
