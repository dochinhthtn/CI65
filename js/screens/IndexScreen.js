import BaseComponent from "../BaseComponent.js";
import AuthNavbar from "../components/AuthNavbar.js";
import ChatList from "../components/ChatList.js";

import { appendTo } from "../utils.js";

export default class IndexScreen extends BaseComponent {

    render() {
        let $container = document.createElement('div');

        let _authNavbar = new AuthNavbar({ });


        let $content = document.createElement('div');
        $content.className = 'row mt-3 container-fluid'; // 12 col

        let $asideLeft = document.createElement('div');
        $asideLeft.className = 'col-sm-3'; // chiếm 3 đơn vị cột / 12 đơn vị
        let _chatList = new ChatList();
        appendTo($asideLeft, _chatList);

        let $messageList = document.createElement('div');
        $messageList.className = 'col-sm-9';
        $messageList.innerHTML = 'Message list tương ứng với chat';

        $content.append($asideLeft, $messageList);  
        
        appendTo($container, _authNavbar);
        $container.append($content);

        return $container;
    }

}