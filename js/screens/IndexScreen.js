import BaseComponent from "../BaseComponent.js";
import AuthNavbar from "../components/AuthNavbar.js";
import ChatList from "../components/ChatList.js";
import { authStateChanged } from "../models/user.js";

import { appendTo } from "../utils.js";

export default class IndexScreen extends BaseComponent {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: auth.currentUser.email,
                name: auth.currentUser.displayName
            }
        }
    }

    render() {
        let $container = document.createElement('div');

        console.log(this.state.user);
        let _authNavbar = new AuthNavbar({ name: this.state.user.name });


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