import BaseComponent from "../BaseComponent.js";
import AuthNavbar from "../components/AuthNavbar.js";
import ChatList from "../components/ChatList.js";

import { appendTo } from "../utils.js";

export default class IndexScreen extends BaseComponent {

    render() {
        let $container = document.createElement('div');

        let _authNavbar = new AuthNavbar({ });

        let _chatList = new ChatList();

        appendTo($container, _authNavbar, _chatList);

        return $container;
    }

}