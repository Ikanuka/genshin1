

////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////CONNEXION FORMULAIRE/////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
function requete(username, userpwd){

    let login = document.getElementById('log');
  
    var xhr = new XMLHttpRequest();
    var data = new FormData();
  
  
    if (username != null){
      data.append('username', username);
    }
    if (userpwd != null){
      data.append('userpwd', userpwd);
    }
  
    xhr.open("POST", "../htbin/login.py");
    
    xhr.onreadystatechange = function() {
      
      if(this.readyState == 4 && this.status == 200) {
          login.innerHTML = this.responseText;
      }
      else if (this.readyState == 4 && this.status == 404) {
          login.innerHTML = 'Erreur 404';
      }
    };
  
    xhr.responseType = "text";
    xhr.send(data);
  
  }
  
    
  document.getElementById('connexion').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var username = document.getElementById('username1').value;
    console.log(username);
    var userpwd = document.getElementById('userpwd1').value;
    console.log(userpwd);
  
    if (username.trim() == ""){
      username = null;
    }
    if (userpwd.trim() == ""){
      userpwd = null;
    }
    requete(username, userpwd);
  
    return false;
  });
  
  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////