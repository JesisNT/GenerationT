function biggestOne(uno, dos, string) {

    if (uno > dos) {
        return uno;
    } else if (uno < dos) {
        return dos;
    } else {
        separador = string.split('');
        return [separador[0], string[string.lenght - 1]];
    }

}

console.log(biggestOne(16, 2, "Haz")); // 16
console.log(biggestOne(3, 3, "Haz")); // Hz