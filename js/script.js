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
