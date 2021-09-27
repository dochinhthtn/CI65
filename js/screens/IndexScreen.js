import BaseComponent from "../BaseComponent.js";
import AuthNavbar from "../components/AuthNavbar.js";
import ChatContainer from "../components/ChatContainer.js";
import ChatList from "../components/ChatList.js";
import MessageList from "../components/MessageList.js";
import SendMessageForm from "../components/SendMessageForm.js";

import { getConversations, listenConversationChanged } from "../models/conversation.js";
import { authStateChanged } from "../models/user.js";

import { appendTo } from "../utils.js";

export default class IndexScreen extends BaseComponent {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: auth.currentUser.email,
                name: auth.currentUser.displayName
            },
            conversations: [],
            currentConversation: null
        }
    }

    async componentDidMount() {

        listenConversationChanged();

        let tmpState = this.state;
        tmpState.conversations = await getConversations();
        this.setState(tmpState);
    }

    setCurrentConversation = (conversationId) => {
        let conversation = this.state.conversations.find(item => item.id == conversationId);
        if (!conversation) return;

        let tmpState = this.state;
        tmpState.currentConversation = conversation;
        this.setState(tmpState);
        console.log(this.state.currentConversation);
    }

    render() {
        let $container = document.createElement('div');
        let _authNavbar = new AuthNavbar({ name: this.state.user.name });

        let $content = document.createElement('div');
        $content.className = 'row mt-3 container-fluid'; // 12 col

        let $asideLeft = document.createElement('div');
        $asideLeft.className = 'col-sm-3'; // chiếm 3 đơn vị cột / 12 đơn vị
        appendTo($asideLeft, new ChatList({ 
            conversations: this.state.conversations, 
            currentConversation: this.state.currentConversation,

            setCurrentConversation: this.setCurrentConversation 
        }));

        let $center = document.createElement('div');
        $center.className = 'col-sm-9';
        appendTo(
            $center,
            new MessageList({ user: this.state.user, currentConversation: this.state.currentConversation }),
            new SendMessageForm({ currentConversation: this.state.currentConversation })
        );

        $content.append($asideLeft, $center);
        appendTo($container, _authNavbar);
        $container.append($content);

        return $container;
    }

}