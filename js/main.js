// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


//  function

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
// il computer deve generare numeri casuali tra 1 e 100
let bombList = []
//crea numeri casuali 
do {
 bomb = (getRndInteger(1,10));
// se crei un numero diverso a quello presente in lista inserisci
    if(bombList.includes(bomb) === false){
      bombList.push(bomb);
    }    
}while (bombList.length < 2)
console.log(bombList)
// termina fino ad avere 16 numeri(si parte con 2 numeri)
//chiedi all'utente 100 (si parte con 8 numeri)numeri
// se la variabile bomba trovata diventa vera, termina la partita o vengono scelti tutti i numeri liberi e si vince la partita
let bombFinded = false;
let utenteChoice = [];

// chiedere all'utente numero fino a quando non hai 100(si parte da 8) numeri diversi
while( !bombFinded && utenteChoice.length < 8){
  let utenteC;
  do {
    utenteC = Number(prompt("inserisci un numero da 1 a 10"));
// dopo ogni inserimento si verifica la presenza del numero nella lista    
    } while( isNaN(utenteC) || utenteC < 1 || utenteC > 100);
  if( bombList.includes(utenteC)){
    bombFinded = true;
  } else if (utenteChoice.includes(utenteC)) {
    alert("numero già selezionato");
  }else {
    utenteChoice.push(utenteC);
  }
}
// se il numero è presente, hai perso,
if(bombFinded){
  alert(`Hai perso il tuo punteggio è ${utenteChoice.length}`)
}else {
  ("HAI VINTO!!")
}

// }while (utenteChoice.length < 8)

console.log(utenteChoice, bombList)

// (bombList.includes(utenteChoice) (utenteChoice.length < 8)



