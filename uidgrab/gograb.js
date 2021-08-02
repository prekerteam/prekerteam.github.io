//https://graph.facebook.com/100000590108953/friends?method=get&access_token=EAAWZA5YNHROMBAHUL7hToJjpZAxXEUhjZCC3ZA2fyS8ZCJT0SjFSnxtVmKbbynT3l4jvYx62my8Al2Jva02PZBIps58mcsYDdVXWkWYdIsBIZAsPByr3qrAwAeoc194C7cQ4wZCD1UzBdTFpeuCeejMWh426svTVPfsKypeg8FZAvywZDZD&limit=1000&fields=id,name,gender,hometown{location}


function goGrab() {
    var berhitung = 0;
    var total = 0;
    var type = $('#type').val();
    var gender = $('input[name=gender]:checked').val();
    var country = getcountryselect();
    // country = country;
    // console.log(country);
    var UIDs = $('textarea[name=uids]').val().split("\n");
    //UIDs = UIDs.filter(v=>v!='');

    // console.log(getcountryselect());
    UIDs = UIDs.filter(function (i) {
        return i != "";
    });

    if (type == "") {
        type = "friends"; //members
    }
    if (type == "filter") {
        type = ""; //members
    }

    if ($('#fb_token').val() != "") {
        var lines = $('#fb_token').val().split(/\n/);
        var tokens = [];
        for (var i = 0; i < lines.length; i++) {
            // only push this line if it contains a non whitespace character.
            if (/\S/.test(lines[i])) {
                tokens.push($.trim(lines[i]));
            }
        }
        var token = tokens[Math.floor(Math.random() * tokens.length)];
        //var token = $('#fb_token').val();
    } else {
        var token = $('#reank_fb_token').val();
    }
    $("#run").val(1);
    $("#total").html("Total : 0");
    //$(".metu").on("click",function(){alert("metu");})
    function progres() {
        $("#banding").html(berhitung + ":" + UIDs.length);
        $("#persen").html(persen(berhitung, UIDs.length) + "%");
        $("#animaprogress").css("width", persen(berhitung, UIDs.length) + "%");
        return persen(berhitung, UIDs.length);
    }
    progres();

    //alert(gender);
    //alert(country);
    //alert(UIDs[1]);

    function persen(a, b) {
        return (Math.floor((a / b) * 100));
    }


    function isUS(string) {

        var n = string.split(",");
        if (typeof n[1] !== "undefined") {
            if (states.indexOf(n[1].trim()) != -1) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    function filterID(d, g, c) {
        var res = [];
        // if (typeof d.length === 'undefined'){
        //     var t = d;
        //     var d = [];
        //     d.push(t);
        // }
        //  console.log(d);
        for (var i = 0; i < d.length; i++) {

            if (c != "semua") {
                // console.log("masuk1");
                // if (d[i]["hometown"] !== undefined && d[i]["hometown"]["location"] !== undefined && d[i]["hometown"]["location"]["country"] !== undefined){
                if (d[i]["hometown"] !== undefined && d[i]["hometown"]["location"] !== undefined && d[i]["hometown"]["location"]["country_code"] !== undefined) {
                    // console.log("masuk2");

                    // if (d[i]["hometown"]["location"]["country"].toUpperCase().indexOf(countries[c.toUpperCase()].toUpperCase()) !== -1){
                    if (d[i]["hometown"]["location"]["country_code"] == c.toUpperCase()) {
                        if (g == "all") {
                          if (d[i]["hometown"]["location"]["city"]) {
                            var uidres = d[i]["id"] + '	' + d[i]["gender"] + '	' + d[i]["hometown"]["location"]["country_code"] + '	' + d[i]["hometown"]["location"]["city"];
                            res.push(uidres);
                          }
                        }
                        if (typeof d[i]["gender"] !== "undefined") {
                            if (g == d[i]["gender"]) {
                              if (d[i]["hometown"]["location"]["city"]) {
                                var uidres = d[i]["id"] + '	' + d[i]["gender"] + '	' + d[i]["hometown"]["location"]["country_code"] + '	' + d[i]["hometown"]["location"]["city"];
                                res.push(uidres);
                              }
                            }
                        }
                    }
                    continue;
                }

            } else {
                if (g == "all") {
                  if (d[i]["hometown"]["location"]["city"]) {
                    var uidres = d[i]["id"] + '	' + d[i]["gender"] + '	' + d[i]["hometown"]["location"]["country_code"] + '	' + d[i]["hometown"]["location"]["city"];
                    res.push(uidres);
                  }
                }
                if (typeof d[i]["gender"] !== "undefined") {
                    if (g == d[i]["gender"]) {
                      if (d[i]["hometown"]["location"]["city"]) {
                        if (d[i]["hometown"]["location"]["city"]) {
                          var uidres = d[i]["id"] + '	' + d[i]["gender"] + '	' + d[i]["hometown"]["location"]["country_code"] + '	' + d[i]["hometown"]["location"]["city"];
                          res.push(uidres);
                        }
                      }
                    }
                }
            }
        }
        console.log(res);
        return res;
    }

    function Grab(next = 0, pindahtoken = 0) {
        //members
        //token = tokens[Math.floor(Math.random() * tokens.length)];
        var getData = {
            method: "get",
            access_token: tokens[pindahtoken],
            limit: 2500,
            //fields: 'id,locale,hometown,gender,location,address'
            fields: 'id,name,gender,hometown{location{country_code,country,city}}' //location{location}'
        };
        // if (next !== undefined) {
        // 	getData.after = next;
        // } else {
        // 	berhitung++;
        // }
        if (next == 0) {
            berhitung++;
        } else {
            getData.after = next;
        }

        if (berhitung - 1 < UIDs.length && $("#run").val() == 1) {
            UID = UIDs[berhitung - 1];
            // /?fields=id,gender,hometown{location{country_code}}&access_token=
            $.getJSON("https://graph.facebook.com/" + UID + "/" + type, getData,
                    function (a) {
                        //berhitung++;
                        // if (a.error !== undefined){
                        //     if (pindahtoken < tokens.length){
                        //         console.log("masuk" + pindahtoken);
                        //         Grab(0,(pindahtoken+1));
                        //     }
                        //     return true;
                        // }

                        var data = a.data;
                        //filter
                        if (type != "") {
                            if (data.length > 0) {
                                var listUID = [];
                                for (var i = 0; i < country.length; i++) {
                                    // console.log(country[i]);
                                    // console.log(filterID(data,gender,country[i]));
                                    listUID = listUID.concat(filterID(data, gender, country[i]));

                                }

                                total += listUID.length;
                                //document.getElementById("uidresult").value = listUID + "\n";
                                $("#uidresult").val($("#uidresult").val() + listUID.join("\n") + "\n");
                                $("#total").html("Total : " + total);
                                //$("#total").html("Total : "+($("#uidresult").val().split("\n").length-1));
                                //console.log(listUID);
                                //console.log(data);
                                if (a.paging.next !== undefined) {
                                    Grab(a.paging.cursors.after);
                                    return true;
                                }
                            }
                        } else {
                            var listUID = [];
                            var profile = [];
                            profile.push(a);
                            for (var i = 0; i < country.length; i++) {
                                // console.log(country[i]);
                                // console.log(filterID(data,gender,country[i]));
                                listUID = listUID.concat(filterID(profile, gender, country[i]));

                            }

                            total += listUID.length;
                            //document.getElementById("uidresult").value = listUID + "\n";
                            $("#uidresult").val($("#uidresult").val() + listUID.join("\n") + "\n");
                            $("#total").html("Total : " + total);
                        }


                        var pro = progres();
                        if (pro >= 100) {
                            //alert ($("#uidresult").val());
                            if ($("#session").val() != "") {
                                $.post($("#session").val(), {
                                        name: country + '-' + gender,
                                        uids: $("#uidresult").val(),
                                        action: "submit"
                                    })
                                    .done(function (data) {
                                        //alert( "Data Loaded: " + data );
                                    });
                            }
                        }
                        if (berhitung - 1 < UIDs.length) {
                            Grab();
                        }
                    })
                .done(function (obj, status, xhdr) {

                })
                .error(function (a) {
                    //berhitung++;

                    if (a.error.code != 100) {
                        if (pindahtoken < tokens.length) {
                            // console.log("masuk" + pindahtoken);
                            berhitung--;
                            Grab(0, (pindahtoken + 1));
                            return true;
                        } else {
                            //berhitung--;
                            progres();
                            Grab(0, (tokens.length - 1));
                        }
                    } else {

                        progres();
                        if (berhitung - 1 < UIDs.length) {
                            Grab(0, pindahtoken);
                        }
                    }
                });
        }
    }


    Grab();
}
goGrab();
