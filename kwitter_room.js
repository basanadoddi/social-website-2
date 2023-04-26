
var firebaseConfig = {
      apiKey: "AIzaSyAMGP_xyK6ZU6Te58QM5vWeQhPpdf30s-A",
      authDomain: "social-website-fb22e.firebaseapp.com",
      databaseURL: "https://social-website-fb22e-default-rtdb.firebaseio.com",
      projectId: "social-website-fb22e",
      storageBucket: "social-website-fb22e.appspot.com",
      messagingSenderId: "695447348628",
      appId: "1:695447348628:web:8cd00810fb5215dbad9b81",
    };
    
    
    
      firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
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
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }