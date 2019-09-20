import firebase from "firebase"
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyDAx3y-LkiUeO-jsRAU4D2E6Ww8VkXckYY",
    authDomain: "theapp-1876a.firebaseapp.com",
    databaseURL: "https://theapp-1876a.firebaseio.com",
    projectId: "theapp-1876a",
    storageBucket: "theapp-1876a.appspot.com",
    messagingSenderId: "588781150156",
    appId: "1:588781150156:web:21e4e69bdc42ff8d"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();

  export {database}; 
  export default fire;
