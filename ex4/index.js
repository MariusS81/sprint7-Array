function numarVocale(șir) {
       const vocale = șir.match(/[aeiou]/gi);
       if (vocale === null) {
        return 0;
    }
        return vocale.length;
}
const input = "aici se gasesc cateva vocale";
console.log(numarVocale(input)); 