// Bonus 2 · La tessera fedeltà
// La consegna è nel README, alla voce "Bonus 2 · La tessera fedeltà".

/*
  STEPS
  1 -Preparo la variabile del messaggio finale.
  2 -Raccolgo i dati chiedendo il prezzo (in euro, senza centesimi) e se il cliente ha la tessera fedeltà.
  3 -Elaboro la condizione per controllare se il cliente ha la tessere fedeltà:
      -se si, c'è uno sconto del 10%.
  4 -Mostro il messaggio finale con alert con due decimali.
*/

// # Fase di preparazione
let messaggioFinale;

// # Fase di raccolta dati
const prezzo = parseInt(prompt("Prezzo prodotto:"));
const tesseraFedelta = prompt("Hai la tessera fedeltà?");

// # Fase di elaborazione
let prezzoFinale = prezzo;

if (tesseraFedelta === "si") {
  const sconto = (prezzo * 10 / 100);
  prezzoFinale = prezzo - sconto;
}

messaggioFinale = `Prezzo da pagare: ${prezzoFinale.toFixed(2)} €`;

// # Fase di output
alert(messaggioFinale);