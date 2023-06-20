
//AÑADE TUS ENLACES DE FIREBASE


var firebaseConfig = {
  apiKey: "AIzaSyBIQWLr1yRTFXod2qS0lAboN1poEdvIqtI",
  authDomain: "salas-web-app.firebaseapp.com",
  databaseURL: "https://salas-web-app-default-rtdb.firebaseio.com",
  projectId: "salas-web-app",
  storageBucket: "salas-web-app.appspot.com",
  messagingSenderId: "409528221421",
  appId: "1:409528221421:web:981d87d07317c65e0816e4"
};

firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
  
var room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML="Hola, Bienvenid@ " + user_name;

function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose:"adding room name"
});

localStorage.setItem("room_name", room_name);

window.location="Salas_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
console.log("room_name - "+ Room_names);
row="<div class='room_name' id="+ Room_names+ "onclick='redirectToRoomName(this.id)'> # "+ Room_names+ " </div><hr>";
document.getElementById("output").innerHTML+=row;
      //Final del código
      });});}
getData();


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}