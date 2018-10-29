  $(document).ready(function(){

 
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD0TlMEjB6c9GSfJO80osmlTJ1gl3T-wHQ",
    authDomain: "rps-online-738a8.firebaseapp.com",
    databaseURL: "https://rps-online-738a8.firebaseio.com",
    projectId: "rps-online-738a8",
    storageBucket: "rps-online-738a8.appspot.com",
    messagingSenderId: "1004053391110"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var firebaseRef = firebase.database().ref();
  var firebaseHeadingRef = firebase.database().ref().child("-LPwqERlVKN7F2QLIg2J")

firebaseHeadingRef.on('value', function(snapshot){
  console.log(this)
  console.log(snapshot);
    $("#liHeading").text(snapshot.val());
})

  $("#say").click(function(){

  var messageText =  $("#chat").val()
  firebaseRef.push("Text").set(messageText);
  $("#chat").val("")
  })

  








});//end of document ready