// Bonus 1 · La pagella
// La consegna è nel README, alla voce "Bonus 1 · La pagella".

/*
  STEPS
  1 -Preparo la variabile del messaggio finale.
  2 -Raccolgo i dati chiedendo un voto da 1 a 10.
  3 -Elaboro la condizione per vedere se non è un numero oppure se è minore di 1 o maggiore di 10. In questo
    caso il messaggio sarà "Voto non valido". dopodiché con else if controllo se è:
    -minore di 6 = "Insufficiente";
    -minore o uguale a 7 = "Sufficiente";
    -minore o uguale a 9 = "Buono".
    E poi nel altrimenti finale il messaggio sarà "Ottimo".
  4 -Mostro il risultato finale con alert.
*/

// # Fase di preparazione
let messaggioFinale;

// # Fase di raccolta dati
const voto = parseInt(prompt("Scrivi un voto da 1 a 10"));

// # Fase di elaborazione
if (isNaN(voto) || voto < 1 || voto > 10) {
  messaggioFinale = "Voto non valido";
} else if (voto < 6) {
  messaggioFinale = "Insufficiente";
} else if (voto <= 7) {
  messaggioFinale = "Sufficiente";
} else if (voto <= 9) {
  messaggioFinale = "Buono";
} else {
  messaggioFinale = "Ottimo";
}

// # Fase di output
alert(messaggioFinale);