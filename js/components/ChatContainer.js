import BaseComponent from "../BaseComponent.js";
import {appendTo} from "../utils.js";
import MessageList from "./MessageList.js";

export default class ChatContainer extends BaseComponent {
    render() {
        let $container = document.createElement('div');

        appendTo($container, new MessageList());

        return $container;
    }
}