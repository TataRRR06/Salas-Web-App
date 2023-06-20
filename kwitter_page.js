//TUS ANLACES DE FIREBASE
var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

document.getElementById("output").innerHTML="Hola,"+ user_name+"bienvenid@ de nuevo a tu Sala "+ room_name+"";

function send(){
msg.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
}); 
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código

//Termina código
      } });  }); }
getData();


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}