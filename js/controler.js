
function cmx(txt) {
    var res = atob(txt);
    return (res);
}
function mcx(txt) {
    var res = btoa(txt);
    return (res);
}

function cid(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1] || ''
    );
}