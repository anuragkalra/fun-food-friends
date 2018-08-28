import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCsubmNBtUTJ1owN6xw63XYJtH9-GVUQ7I",
  authDomain: "fun-food-friends-9f9e4.firebaseapp.com",
  databaseURL: "https://fun-food-friends-9f9e4.firebaseio.com",
  projectId: "fun-food-friends-9f9e4",
  storageBucket: "fun-food-friends-9f9e4.appspot.com",
  messagingSenderId: "348485840132"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
