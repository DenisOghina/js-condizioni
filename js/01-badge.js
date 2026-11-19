// Traccia 01 · Il badge
// La consegna è nel README, alla voce "01 · Il badge".

/*
  STEPS
  1 -Preparo le tre costanti.
  2 -Raccolgo i miei dati: nome, età e professione.
  3 -Elaboro le frasi da stampare.
  4 -Stampo il risultato.
*/

// # Fase di preparazione

// # Fase di raccolta dati
const firstName = 'Denis';
const age = 30;
const profession = 'studente';

// # Fase di elaborazione
const concatenazione = 'Mi chiamo ' + firstName + ', ho ' + age + ' anni e faccio lo ' + profession + '.';
const templateLiteral = `Mi chiamo ${firstName}, ho ${age} anni e faccio lo ${profession}.`;
const calcoloEta = age + 10;

/*
  Se metto tra apici il numero della costante age il calcolo non viene eseguito perchè 
  diventa una stringa e attacca i valore al posto di fare la somma. 
*/

// # Fase di output
console.log(concatenazione);
console.log(templateLiteral);
console.log(`Fra 10 anni avrò ${calcoloEta} anni.`);