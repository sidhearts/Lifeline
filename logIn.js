var firebaseConfig = 
{
    apiKey: "AIzaSyAlrZpm1XGmgqUTztWJKMeTzfWlhoyM518",
    authDomain: "lifeline-a390f.firebaseapp.com",
    databaseURL: "https://lifeline-a390f.firebaseio.com",
    projectId: "lifeline-a390f",
    storageBucket: "lifeline-a390f.appspot.com",
    messagingSenderId: "687180315748",
    appId: "1:687180315748:web:bc3eaca5cc8a964076b371"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function login(){
      var email = document.getElementById("email1").value;
      var password = document.getElementById("pwd").value;

      var result = firebase.auth().signInWithEmailAndPassword(email, password);

      result.catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;

        alert("Message" + errorMessage);
      });
  };

  function logOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
  };

  var add = document.getElementById("add");

  var disp = "true";

  add.addEventListener("click", function(){
      if(disp == "true"){
          document.getElementById("entry").style.display = "block";
          disp = "false";
      }
      else{
        document.getElementById("entry").style.display = "none";
          disp = "true";
      }
  });

  function submit(){
    var bed = document.getElementById("bed").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var deviceid = document.getElementById("deviceid").value;

      $("#patientTable tbody").append(
        "<tr><th scope='row'>" + bed + "</th><td>" + name + "</td><td>" + age + "</td><td>" + gender + "</td><td>" + deviceid + "</td><td><button class='btn btn-outline-info'><i class='fas fa-info-circle'></i> Details</button></td><td><button class='btn btn-success' onClick= 'start()'><i class='fas fa-play'></i> Start</button> <button class='btn btn-danger' onClick= 'stop()'><i class='fas fa-play'></i> Stop</button></td><td><i class='fas fa-trash-alt'></i></td></tr>"
      );
      $("tr").on("click",".fas", function(event){
        $(this).parents("tr").fadeOut(500, function(){
            $(this).remove();
        });
        event.stopPropagation();
    })
  };
  
  $("tr").on("click",".fa-trash-alt", function(event){
	$(this).parents("tr").fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

function start(){
  $.get("https://cloud.boltiot.com/remote/8048e7f6-315e-45bf-999b-27e357d67636/serialWR?data=BACKWARD&deviceName=BOLT3849125",()=> false);
}
function stop(){
    $.get("https://cloud.boltiot.com/remote/8048e7f6-315e-45bf-999b-27e357d67636/serialWR?data=FORWARD&deviceName=BOLT3849125",()=> false);
}