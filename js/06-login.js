// Traccia 06 · Il login
// La consegna è nel README, alla voce "06 · Il login".

/*
  STEPS
  1 -Preparo le due variabili delle credenziali corrette e quella del messaggio finale.
  2 -Raccolgo l'username e la password del utente con due prompt.
  3 -Elaboro la condizione per controllare se l'username e la password siano uguali alle credenziali corrette.
  4 -Mostro con alert il messaggio "Login effettuato" o "Credenziali errate".
*/

// # Fase di preparazione
const userNameCorretto = 'admin';
const passwordCorretta = '1234';
let messaggioFinale;

// # Fase di raccolta dati
const userNameUtente = prompt('Inserisci useraname:');
const passwordUtente = prompt('Inserisci password:');

// # Fase di elaborazione
if (userNameUtente === userNameCorretto && passwordUtente === passwordCorretta) {
  messaggioFinale = 'Login effettuato';
} else {
  messaggioFinale = 'Credenziali errate';
}

// # Fase di output
alert(messaggioFinale);