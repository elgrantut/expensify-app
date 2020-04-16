import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAZO8z7Up1TvlTtPNMn5sN4w1wxWSxrM7U",
  authDomain: "expensify-4710c.firebaseapp.com",
  databaseURL: "https://expensify-4710c.firebaseio.com",
  projectId: "expensify-4710c",
  storageBucket: "expensify-4710c.appspot.com",
  messagingSenderId: "119503729522",
  appId: "1:119503729522:web:551721989f2aa53f0e23eb",
  measurementId: "G-7ZD4M12CMB"

};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Matias Sanchez'
});
