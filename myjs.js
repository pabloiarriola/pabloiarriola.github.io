var wage = document.getElementById("message");
var chat = document.getElementById("chat");
var i=0;
httpGet();


wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {//here we captured the enter
        validate(e);
    }
});

function validate(e) {
    httpPOST()
    httpGet();
}

function httpGet(){
  $.get("http://34.210.35.174:7000/", function(responseText) {
    for(i=0;i<responseText.length;i++){
      chat.innerHTML += '<div class="messages"> <p style="font-weight: bold;">'+ responseText[i].nick +':</p> ' + responseText[i].text + '</div>'
    }
    chat.scrollTop = chat.scrollHeight;
    window.t = responseText[responseText.length-1].rowid;
});

}

function httpPOST(){
	
  const ip = "http://34.210.35.174:7000";
  envio = new FormData();
  envio.append("student_id",document.getElementById('student_id').value);
  envio.append("text",document.getElementById('message').value);
  envio.append("nick",document.getElementById("username").value);
  fetch (ip, {
	  method: 'POST',
	  body: envio
  });
  alert ("enviado");
  //it makes no sense to ask the user to enter the id and username every time
  //document.getElementById('student_id').value="";
  //document.getElementById("username").value = "";
    document.getElementById('message').value="";
  
}

