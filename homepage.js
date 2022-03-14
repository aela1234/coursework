// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjTYSE7ftImY5Tzxy-qgKRKau9QTBIZYw",
  authDomain: "fir-comp-sci-943f6.firebaseapp.com",
  databaseURL: "https://fir-comp-sci-943f6-default-rtdb.firebaseio.com",
  projectId: "fir-comp-sci-943f6",
  storageBucket: "fir-comp-sci-943f6.appspot.com",
  messagingSenderId: "496246019112",
  appId: "1:496246019112:web:868b77c69aae1501bd511d",
  measurementId: "G-VWZC88ZMEN"
};

firebase.initializeApp(firebaseConfig);

const myDBCxn = firebase.database().ref("/contacts");

const btn2 = document.getElementById("submit");
btn2.addEventListener("click", insertRecord);

function insertRecord() {
  alert("SUBMIT clicked!!!");
 
  const username = document.getElementById("username");
  const usernameValue = username.value;
  username.value = "";
  username.focus();

  const password = document.getElementById("password");
  const passwordValue = password.value;
  password.value = "";
  password.focus();

 

  const data = myDBCxn.push();
  data.set({ username: usernameValue, password: passwordValue, });
}
