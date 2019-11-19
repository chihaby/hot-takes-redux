import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCYkFsBI74gBqQ3qX_pfhS6JQCqxk2y3yY",
  authDomain: "first-flight-6df89.firebaseapp.com",
  databaseURL: "https://first-flight-6df89.firebaseio.com",
  projectId: "first-flight-6df89",
  storageBucket: "first-flight-6df89.appspot.com",
  messagingSenderId: "335955122918",
  appId: "1:335955122918:web:9a8807d017f3787fb4f927",
  measurementId: "G-KR15X6JR68"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
