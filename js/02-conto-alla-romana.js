// Traccia 02 · Il conto alla romana
// La consegna è nel README, alla voce "02 · Il conto alla romana".

/*
  STEPS
  1 -Preparo la costante della mancia.
  2 -Raccolgo i dati del numero delle persone e il totale della spesa usando il prompt.
  3 -Elaboro il calcolo matematico.
  4 -Stampo il risultato con alert.
*/

// # Fase di preparazione
const mancia = 10;

// # Fase di raccolta dati
const numeroPersone = parseInt(prompt('Quante persone siete?'));
const spesaTotale = parseInt(prompt('Quanto avete speso?'));

// # Fase di elaborazione
const spesaPerPersona = (spesaTotale + mancia) / numeroPersone;
const quotaFormattata = spesaPerPersona.toFixed(2);

// # Fase di output
alert(`A testa: ${quotaFormattata} €`);