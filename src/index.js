import App from "./app";

import style from "./main.css";


const arr = [1, 2, 3];
const iAmJavascriptES6 = (msg) => console.log(...arr,...msg);
typeof window != 'undefined' && (window.iAmJavascriptES6 = iAmJavascriptES6);
iAmJavascriptES6('im a silly entry point')
