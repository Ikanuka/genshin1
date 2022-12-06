////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////CHATBOX//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

function chatGet(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../htbin/chatget.py");
    xhr.addEventListener('load', function(e){
      let chat = JSON.parse(xhr.responseText);
      let msg = document.getElementById('chatcontent');
      
      let chatdefault = chat.map(function(texte){
        return `
          <div class="chatmessage">
            <span class="date">[${texte.date}]</span>
            <span class="heure">[${texte.time}]</span>
            <span class="username">[${texte.user}]</span>
            <span class="usermsg">${texte.msg}</span>
          </div>
        `
      }).join('');
  
      msg.innerHTML = chatdefault;
    })
    xhr.send();

  }
  chatGet();
  
  document.getElementById('envoie').addEventListener('submit', chatsend)
  
  
  
  function chatsend(e){
    e.preventDefault();
  
    let message = document.getElementById('msg');
    var data = new FormData(this);
    let chatmsg = document.getElementsByClassName('chatmessage');
    var xhr = new XMLHttpRequest();

  

    data.append('message', message.value);
    xhr.open("POST", "../htbin/chatsend.py", true);
  
    xhr.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200) {
        chatmsg.innerHTML = this.responseText;
        chatGet();
      }
      else if (this.readyState == 4 && this.status == 404) {
        chatmsg.innerHTML = 'Erreur 404';
      }
    };
  
    xhr.responseType = 'text';
    xhr.send(data);
    message.value = "";

    document.getElementById('chatcontent').scrollBy(0, window.innerHeight);

  }
  
  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////