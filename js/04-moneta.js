// Traccia 04 · Testa o croce
// La consegna è nel README, alla voce "04 · Testa o croce".

/*
  STEPS
  1 -Preparo la soglia fissa e variabile che conterrà il risultato.
  2 -Raccolgo i dati: un numero a caso con Math.random().
  3 -Elaboro la condizione: testa o croce.
  4 -Mostro il risultato con alert e stampo in console il numero pescato.
*/

// # Fase di preparazione
const sogliaFissa = 0.5;
let risultatoLancio;

// # Fase di raccolta dati
const numeroPescato = Math.random();

// # Fase di elaborazione
if (numeroPescato < sogliaFissa) {
  risultatoLancio = 'Testa';
} else {
  risultatoLancio = 'Croce';
}

// # Fase di output
alert(risultatoLancio);
console.log(numeroPescato);