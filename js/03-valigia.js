// Traccia 03 · La valigia
// La consegna è nel README, alla voce "03 · La valigia".

/*
  STEPS
  1 -Preparo variabili del prezzo base del biglietto, il supplemento e la soglia massima del peso.
  2 -Raccolgo i dati del peso della valigia usando il prompt.
  3 -Elaboro la condizione del peso della valigia e aggiungo il supplemento.
  4 -Stampo in console il prezzo finale.
*/

// # Fase di preparazione
let prezzoBiglietto = 36;
const supplemento = 20;
const sogliaPeso = 23;

// # Fase di raccolta dati
let pesoValigia = parseInt(prompt('Quanto pesa la valigia?'));

// # Fase di elaborazione
if (pesoValigia > sogliaPeso) {
  prezzoBiglietto = prezzoBiglietto + supplemento;
}

// # Fase di output
console.log(`Prezzo del biglietto: ${prezzoBiglietto} €`);

/*
  Mettendo una stringa dentro l'input del prompt il prezzo rimane invariato perchè parseInt cerca di estrarre un numero,
  ma non trovando numeri restituisce NaN quindi a quel punto il valore della variabile pesoValigia è NaN.
  Quando arriva a if il confronto con NaN restituisce sempre false. Quindi visto che la condizione è false,
  JavaScript salta le istruzioni dentro le { }. Il prezzoBiglietto non viene mai modificato e rimane al suo valore iniziale.
*/