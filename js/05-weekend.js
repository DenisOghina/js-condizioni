// Traccia 05 · Che giorno è?
// La consegna è nel README, alla voce "05 · Che giorno è?".

/*
  STEPS
  1 -Preparo la variabile vuota che conterrà il testo finale.
  2 -Raccolgo i dati chiedendo al utente il giorno della settimana con prompt.
  3 -Elaboro il confronto tra i giorni della settimana e quelli del weekend.
  4 -Mostro il messaggio con alert.
*/

// # Fase di preparazione
let messaggioFinale;

// # Fase di raccolta dati
const rispostaUtente = prompt('Che giorno della settimana è oggi?');

// # Fase di elaborazione
if (rispostaUtente === 'sabato' || rispostaUtente === 'domenica') {
  messaggioFinale = 'Buon weekend!';
} else {
  messaggioFinale = 'Buon lavoro!';
}

// # Fase di output
alert(messaggioFinale);

/*
  Se rispondiamo con la lettera maiuscola iniziale il messaggio che uscirà sarà 'Buon lavoro' perchè
  in JavaScript il confronto tra stringhe è "case-sensitive" (distingue tra lettere maiuscole e minuscole).
  A quel punto il confronto è false e mi mostra l'altrimenti (else).
  Invece se lasciamo il campo vuoto promt restituisce una stringa vuota '' e il confronto è false.
  Se premiamo annulla il prompt restituisce il valore speciale "null" (nessun valore inserito) e anche
  in questo caso il confronto è false. 
*/