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
  const emailField = document.getElementById("email");
  const emailFieldValue = emailField.value;

  emailField.value = "";
  emailField.focus();

  const fN = document.getElementById("fName");

  const fNvalue = fN.value;
  fN.value = "";
  fN.focus();

  const sN = document.getElementById("sName");
  const sNValue = sN.value;
  sN.value = "";
  sN.focus();

  const age = document.getElementById("age");
  const ageValue = age.value;
  age.value = ""; // clear the field
  age.focus();

  const dob = document.getElementById("dob");
  const dobValue = dob.value;
  dob.value = "";
  dob.focus();

  const data = myDBCxn.push();
  data.set({
    email: emailFieldValue,
    fName: fNvalue,
    sName: sNValue,
    age: ageValue,
    dob: dobValue
  });
}
