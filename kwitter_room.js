var firebaseConfig = {
      apiKey: "AIzaSyDUxz0VXUQrIOtGX76ixLlezx3qBmaGE9M",
      authDomain: "i-quit-61fbb.firebaseapp.com",
      databaseURL: "https://i-quit-61fbb-default-rtdb.firebaseio.com",
      projectId: "i-quit-61fbb",
      storageBucket: "i-quit-61fbb.appspot.com",
      messagingSenderId: "162262775135",
      appId: "1:162262775135:web:1e476e69b9cb5f4f73b2ea"
    };
  firebase.initializeApp(firebaseConfig);  
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name; 
function addRoom()
{
room_name = document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";


}


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}



function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("roome_name");
 window.location = "index.html";
}