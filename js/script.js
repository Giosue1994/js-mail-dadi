// ________ ESERCIZIO EMAIL ________
// lista delle email
var email = ['calamaro39@gmail.com', 'sternocleidomastoideo11@gmail.com', 'cammello98@gmail.com', 'gesu33@gmail.com', 'anubidc@gmail.com'];
// presenza della email nella lista
var sternocleidomastoideo = false;
// email da cercare
var cercaEmail = 'sternocleidomastoideo11@gmail.com';

var tuaEmail = document.getElementById('tua-email');
var emailUtente = document.getElementById('email-utente');
var inserisci = prompt('inserisci la tua email');
tuaEmail.innerHTML = 'La tua email è: ';


// l'email inserita deve essere uguale a quella specificata sopra
inserisci == cercaEmail;

//controllo se la mia email è nella lista
for ( var i = 0; i < email.length; i++ ) {
  if(email[i] === inserisci ) {
    sternocleidomastoideo = true;
  }
}

// se l'email inserita nel prompt è vera compare sullo schermo altrimente esce fuori un errore
if (sternocleidomastoideo) {
  emailUtente.innerHTML = inserisci;
}else {
  tuaEmail.innerHTML = 'Email non corretta';
  alert('ERRORE');
}


// ________ ESERCIZIO DADI ________
var gioco = document.getElementById('gioco').innerHTML = 'Gioco dei dadi';
var risultato = document.getElementById('risultato');

// calcolo casuale dei numeri da parte del computer
var computer = Math.floor(Math.random() * 6) + 1;

// l'utente che inserisce il numero
var player = parseInt(prompt('Scegli un numero da 1 a 6'));

// vittoria / sconfitta
if (player > computer) {
  alert('HAI VINTO');
  risultato.innerHTML = 'VITTORIA';
}
else if (player == computer) {
  alert('PAREGGIO');
  risultato.innerHTML = 'PAREGGIO';
}
else if (isNaN(player)) {
  alert('Inserire solo numeri');
}
else {
  alert('HAI PERSO');
  risultato.innerHTML = 'SCONFITTA';
}
