// Traccia 08 · Il parcheggio
// La consegna è nel README, alla voce "08 · Il parcheggio".

/*
  STEPS
  1 -Preparo le variabili delle tariffe orarie e del messaggio finale.
  2 -Raccolgo i dati chiedendo con prompt quante ore si ferma.
  3 -Elaboro la prima condizione per controllare se il valore non è un numero oppure è minure di 1.
    Dopodiché elaboro le atre condizione per il numero delle ore e la tariffa oraria.
  4 -Stampo in console il messaggio finale.
*/

// # Fase di preparazione
const tariffaBreve = 5;
const tariffaMedia = 10;
const tariffaLunga = 15;
let messaggioFinale;

// # Fase di raccolta dati
const tempoSosta = parseInt(prompt('Quante ore ti fermi?'));

// # Fase di elaborazione
if (isNaN(tempoSosta) || tempoSosta < 1) {
  messaggioFinale = 'Scrivi il numero di ore';
} else if (tempoSosta <= 2) {
  messaggioFinale = 'Da pagare: 5 €';
} else if (tempoSosta <= 5) {
  messaggioFinale = 'Da pagare: 10 €';
} else {
  messaggioFinale = 'Da pagare: 15 €';
}

// # Fase di output
console.log(messaggioFinale);