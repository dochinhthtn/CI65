import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import IndexScreen from "./screens/IndexScreen.js";
import CreateChatGroupScreen from "./screens/CreateChatGroupScreen.js";

import { appendTo } from "./utils.js";

let router = new Navigo(null, true, '#');

let $app = document.getElementById('app');

router.on('/login', function() {
    $app.innerHTML = '';
    appendTo($app, new LoginScreen());
}).resolve();

router.on('/register', function() {
    $app.innerHTML = '';
    appendTo($app, new RegisterScreen());
}).resolve();

router.on('/index', function() {
    $app.innerHTML = '';
    appendTo($app, new IndexScreen());
}).resolve();

router.on('/create-group', function() {
    $app.innerHTML = '';
    appendTo($app, new CreateChatGroupScreen());
}).resolve();

router.notFound(function() {
    $app.innerHTML = "<h1>404 NOT FOUND</h1>";
});

window.router = router;