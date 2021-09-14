// resuable component: 
// tạo 1 component:
// + dùng đi dùng lại: 
// + xử lý độc lập

import IndexScreen from "./screens/IndexScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";

import { appendTo } from "./utils.js";

let $app = document.getElementById('app');
appendTo($app, new IndexScreen());

import data from './data/food.js';
console.log(data);

// $app.append(new RegisterScreen().render()); // render 1 lần duy nhất

// let hello = document.getElementById('hello');

// let $h2 = document.createElement('h2');
// $h2.innerHTML = 'hi';

// document.replaceChild(hello, $h2);

// console.log(hello);

// NavigoJS (v7)
// React -> React Router / React Router DOM