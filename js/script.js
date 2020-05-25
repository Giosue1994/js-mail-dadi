// lista delle email
var email = ['calamaro39@gmail.com', 'cammello98@gmail.com', 'gesu33@gmail.com', 'sternocleidomastoideo11@gmail.com', 'anubidc@gmail.com'];
// presenza della email nella lista
var sternocleidomastoideo = false;
// email da cercare
var cercaEmail = 'sternocleidomastoideo11@gmail.com';

var inserisci =document.getElementById('inserisci-email');
var invia =document.getElementById('invia');

inserisci.innerHTML = 'Inserisci Email';



//controllo se la mia email è nella lista
for ( var i = 0; i < email.length; i++ ) {
  if(email[i] === cercaEmail ) {
    sternocleidomastoideo = true;
  }
  console.log(email[i]);
}

invia.addEventListener('ckick',
function() {

  }
);
