let sir_numere = [156, -1, -1, 34, -1, 12, 46, 2, 5, -27];
function total(sir_numere) {
  sum=0;
   for (let i = 0; i < sir_numere.length; i++)  {
    sum += sir_numere[i];
     console.log(sir_numere[i]);
   }

  console.log(sum);
}
total(sir_numere);