
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAmykopjj718snpBmdaMfFvYMe4IoaggK0",
    authDomain: "uwaterlooeuchre.firebaseapp.com",
    databaseURL: "https://uwaterlooeuchre.firebaseio.com",
    projectId: "uwaterlooeuchre",
    storageBucket: "uwaterlooeuchre.appspot.com",
    messagingSenderId: "756338843354"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings({ timestampsInSnapshots: true });
  export default firebase;