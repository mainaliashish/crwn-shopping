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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user for crwn shopping.");
    }
    return userRef;
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
