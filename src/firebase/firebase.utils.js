import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBxxcEALsMB-FS1JzPOgzJyQByQN4N8FTA",
  authDomain: "crwn-shopping-ashish.firebaseapp.com",
  databaseURL: "https://crwn-shopping-ashish.firebaseio.com",
  projectId: "crwn-shopping-ashish",
  storageBucket: "crwn-shopping-ashish.appspot.com",
  messagingSenderId: "532392101717",
  appId: "1:532392101717:web:bcd6328a329657dc5ad1dc",
  measurementId: "G-P582Z7SLGY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
