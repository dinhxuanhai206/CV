function myFunction() {
    var texts = document.getElementById('text');
    texts.innerHTML = texts.innerHTML.replace(/frontend/gi, function (result) {
        // return '<mark>' + result + '</mark>';
        return `<mark>${result}</mark>`;
    });
}
