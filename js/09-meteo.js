// Traccia 09 · Come mi vesto?
// La consegna è nel README, alla voce "09 · Come mi vesto?".

/*
  STEPS
  1 -Preparo la variabile del messaggio finale e la variabile della soglia della temperatura esterna.
  2 -Raccolgo i dati chiedendo la temperatura esterna.
  3 -Elaboro le condizioni:
    - Se la temperatura non è un numero: imposto il messaggio 'Scrivi la temperatura'.
    - Altrimenti se è minore di 15 °C:
        * chiedo con prompt se piove;
        * se la risposta è 'si': messaggio "Metti l'impermeabile";
        * altrimenti: messaggio "Metti la giacca".
    - Altrimenti (dai 15 °C in su): imposto il messaggio 'Vai leggero'.
  4 -Mostro il messaggio finale con alert.
*/

// # Fase di preparazione
const sogliaTemperatura = 15;
let messaggioFinale;
let rispostaUtente;

// # Fase di raccolta dati
const temperaturaEsterna = parseInt(prompt("Qual è la temperatura esterna?"));

// # Fase di elaborazione
if (isNaN(temperaturaEsterna)) {
  messaggioFinale = "Scrivi la temperatura";
} else if (temperaturaEsterna < 15) {
  rispostaUtente = prompt("Sta piovendo?");
  if (rispostaUtente === "si") {
    messaggioFinale = "Metti l'impermeabile";
  } else {
    messaggioFinale = "Metti la giacca";
  }
} else {
  messaggioFinale = "Vai leggero";
}

// # Fase di output
alert(messaggioFinale);