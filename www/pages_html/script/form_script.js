////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////CHANGER DE FORMULAIRE////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
let tabs = document.querySelectorAll(".form-link:not(.desactive)");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    unSelectAll();
    tab.classList.add("active");
    let ref = tab.getAttribute("data-ref");
    document
      .querySelector(`.affichage[data-id="${ref}"]`)
      .classList.add("active");
  });
});

function unSelectAll() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  let body_form = document.querySelectorAll(".affichage");
  body_form.forEach((tab) => {
    tab.classList.remove("active");
  });
}

document.querySelector(".form-link.active").click();
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////VERIFICATION FORMULAIRE////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


document.getElementById('formulaire').addEventListener('submit', check);


function check(e){

  let username = document.getElementById('username');
  let firstname = document.getElementById('firstname');
  let birthdate = document.getElementById('birthdate');
  let lastname = document.getElementById('lastname');
  let userpwd = document.getElementById('userpwd');
  let useremail = document.getElementById('useremail');

  let pwdvalue=userpwd.value;

  let wrong_username = document.getElementById('wrong_username');
  let wrong_mdp = document.getElementById('wrong_password');
  let wrong_date = document.getElementById('wrong_date');
  let wrong_mail = document.getElementById('wrong_mail');
  let good_submit = document.getElementById('good_submit');

  var aujd = new Date();

  var verifmdp = new RegExp("^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$");
  var verifemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  console.log(useremail.value.match(verifemail));

  username.style.backgroundColor = 'white';
  firstname.style.backgroundColor = 'white';
  birthdate.style.backgroundColor = 'white';
  useremail.style.backgroundColor = 'white';
  lastname.style.backgroundColor = 'white';
  userpwd.style.backgroundColor = 'white';

  wrong_username.innerHTML = "";
  good_submit.innerHTML = "";
  wrong_date.innerHTML = "";
  wrong_mail.innerHTML = "";
  wrong_mdp.innerHTML = "";
  
  let okSubmit = true;
  let jour = birthdate.value.split('/')[0];
  let mois = birthdate.value.split('/')[1];
  let annee = birthdate.value.split('/')[2];

  if(pwdvalue.match(verifmdp) == null) {
      wrong_mdp.innerHTML = 'Doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.';
      userpwd.style.backgroundColor = '#ff00008c';
      okSubmit = false;
  }

  if(lastname.value.trim() == ""){
    lastname.style.backgroundColor = '#ff00008c';
      okSubmit = false;
  }

  if(firstname.value.trim() == ""){
    firstname.style.backgroundColor = '#ff00008c';
      okSubmit = false;
  }

  if(username.value.trim() == "" || username.value.length <=5){
      wrong_username.innerHTML = 'Doit contenir au moins 6 caractères.';
      username.style.backgroundColor = '#ff00008c';
      okSubmit = false;
  }

  if(jour >= aujd.getUTCDate() && mois >= aujd.getUTCMonth() + 1  && annee >= aujd.getUTCFullYear()){
      wrong_date.innerHTML = 'Date de naissance invalide.';
      birthdate.style.backgroundColor = '#ff00008c';
      okSubmit = false;
  }

  else if((!(jour < 0 || jour > 31) && !(mois < 0 || mois > 12) && !(annee < aujd.getUTCFullYear() - 122)) == false){ //-122 car la personne qui a vécu le plus longtemps est morte à 122 ans. 
      wrong_date.innerHTML = `Le Jour doit être entre 01 et 31, Mois entre 01 et 12, l'Année entre ${aujd.getUTCFullYear() - 122} et ${aujd.getUTCFullYear()}`;
      birthdate.style.backgroundColor = '#ff00008c';
      okSubmit = false;
  }

  if(useremail.value.trim == "" || useremail.value.match(verifemail) == null){
    wrong_mail.innerHTML = 'Adresse e-mail invalide.';
    useremail.style.backgroundColor = '#ff00008c';
    okSubmit = false;
  }

  console.log(okSubmit);
  if(okSubmit == true){
    good_submit.innerHTML = 'Inscription Réussite !';
  }
  else{
    e.preventDefault();
  }
  return okSubmit;
}


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
