import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC5vTyj2T-Mkudt_3s7jw_SMBvrnojQ76g",
    authDomain: "react-redux-chat-app-8e408.firebaseapp.com",
    databaseURL: "https://react-redux-chat-app-8e408.firebaseio.com",
    projectId: "react-redux-chat-app-8e408",
    storageBucket: "react-redux-chat-app-8e408.appspot.com",
    messagingSenderId: "1068057858904"
};
firebase.initializeApp(config);

/*Example to check firebase database connectivity with our app*/
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
firebase.database().ref().set(person);

/*Added google auth provider*/
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider };