// Traccia 10 · Il bancomat
// La consegna è nel README, alla voce "10 · Il bancomat".

/*
  STEPS
  1 -Preparo la variabile del messaggio finale.
  2 -Raccolgo i dati chiedendo quanto è il saldo del conto e quanto si preleva.
  3 -Elaboro la prima condizione per controllare se l'importo è maggiore di 0 e se non lo è
    il messaggio è "Importo non valido".
    Creo la seconda condizione annidata dove se l'importo è valido e il saldo basta
    il messaggio è "Prelievo effettuato. Nuovo saldo: __ €", se invece il saldo non basta
    il messaggio è "Saldo insufficiente".
  4 -Mostro il messaggio finale con alert.
*/

// # Fase di preparazione
let messaggioFinale;

// # Fase di raccolta dati
const saldoConto = parseInt(prompt("Quanto è il saldo del conto?"));
const prelievo = parseInt(prompt("Quanto vuoi prelevare?"));

// # Fase di elaborazione
if (prelievo > 0) {
  if (prelievo <= saldoConto) {
    const nuovoSaldo = (saldoConto - prelievo);
    messaggioFinale = `Prelievo effettuato. Nuovo saldo: ${nuovoSaldo} €`;
  } else {
    messaggioFinale = "Saldo insufficiente";
  }
} else {
  messaggioFinale = "Importo non valido";
}

// # Fase di output
alert(messaggioFinale);