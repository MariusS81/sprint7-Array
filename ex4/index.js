function numarVocale(sir) {
       const vocale = șir.match(/[aeiou]/gi);
       if (vocale === null) {
        return 0;
    }
        return vocale.length;
}
const count = "Aici se gasesc cateva vOcalE";
console.log(numarVocale(count)); 