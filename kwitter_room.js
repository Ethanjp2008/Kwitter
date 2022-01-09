var firebaseConfig = {
    apiKey: "AIzaSyD--xk3z4Tkbrpj0RglKdydS4KD8_wr7WA",
    authDomain: "kiwitter-page.firebaseapp.com",
    databaseURL: "https://kiwitter-page-default-rtdb.firebaseio.com",
    projectId: "kiwitter-page",
    storageBucket: "kiwitter-page.appspot.com",
    messagingSenderId: "601677129297",
    appId: "1:601677129297:web:f24b44f4b3e8d8e948fa70"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !!"


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name- " + Room_names);
   row = "<div class='room_name' id=" + Room_names + "onclick='redirectToTheRoomName(this.id)'>#" + Room_names + "</div> <hr>"
   document.getElementById("output").innerHTML += row;   
   //End code
   });});}
getData();