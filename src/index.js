import 'babel-polyfill';
import App from "./app";
import style from "./main.css";
import ReactDOM from "react-dom";
import React from "react";


import Space, { subscribe } from 'spaceace';

const space = new Space({
  appName: "SpaceAce demoe",
  saving: false,
  pizza: '',
  user: { name: 'Jon', age: 18, pizzaLover: true }
});

subscribe(space, ({ newSpace, causedBy }) => {
  console.log(`State updated by ${causedBy}`);


  ReactDOM.render(<App state={newSpace} />,
    document.getElementById("app"));

  // Causes React to render
  // setTimeout(() => {
  //   newSpace({
  //     user: {
  //       name: 'Restry'
  //     }
  //   });
  // }, 5000);

});


// Causes React to render
setTimeout(() => {
  space({ appName: "SpaceAce demo" });
}, 1000);


