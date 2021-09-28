import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase/app";

firebase.initializeApp({
	apiKey: "AIzaSyBVdnLZWWE9yLu9ZpC4_Ly8o81ELDxqHr4",
	authDomain: "tsoiffergram.firebaseapp.com",
	databaseURL: "https://tsoiffergram-default-rtdb.firebaseio.com",
	projectId: "tsoiffergram",
	storageBucket: "tsoiffergram.appspot.com",
	messagingSenderId: "182845047502",
	appId: "1:182845047502:web:fc5acb3700265d24ae069f",
	measurementId: "G-BCKK1RCK70",
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
