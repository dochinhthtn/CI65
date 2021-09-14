import BaseComponent from "../BaseComponent.js";
import AuthNavbar from "../components/AuthNavbar.js";

import { appendTo } from "../utils.js";

export default class IndexScreen extends BaseComponent {

    render() {
        let $container = document.createElement('div');

        let _authNavbar = new AuthNavbar({ });

        appendTo($container, _authNavbar);

        return $container;
    }

}