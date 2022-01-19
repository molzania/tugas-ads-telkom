function cekKata(kata) {

    var karakter  = kata.split(''),
        hurufPertama = karakter.shift(),
        hurufTerakhir  = karakter.pop();

    if (hurufPertama !== hurufTerakhir) {
        return false;
    }

    if (karakter.length < 2) {
        return true;
    }

    return cekKata(karakter.join(''));

}

cekKata("abba");