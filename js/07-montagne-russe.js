// Traccia 07 · Le montagne russe
// La consegna è nel README, alla voce "07 · Le montagne russe".

/*
  STEPS
  1 -Preparo le variabili dell'età e altezza minima più quella con il messaggio finale.
  2 -Raccolgo i dati del utente con due prompt.
  3 -Elaboro la condizione controllando per prima cosa se la risposta è un numero e se lo è verifico se
    rispettano i requisiti minimi.
  4 -Mostro il messaggio finale con alert.
*/

// # Fase di preparazione
const etaMinima = 14;
const altezzaMinima = 140;
let messaggioFinale;

// # Fase di raccolta dati
const etaUtente = parseInt(prompt('Quanti anni hai?'));
const altezzaUtente = parseInt(prompt('Quanto sei alto?'));

// # Fase di elaborazione
if (isNaN(etaUtente) || isNaN(altezzaUtente)) {
  messaggioFinale = 'Dati non validi';
} else if (etaUtente >= etaMinima && altezzaUtente >= altezzaMinima) {
  messaggioFinale = 'Puoi salire!';
} else {
  messaggioFinale = 'Mi dispiace, non puoi salire';
}

// # Fase di output
alert(messaggioFinale);