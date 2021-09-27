import BaseComponent from "../BaseComponent.js";

let messages = [
    {
        content: 'hello',
        dateModified: '2021-09-24',
        user: 'dochinhthtn@gmail.com'
    },
    {
        content: 'chào bạn, mình ở đây từ chiều',
        dateModified: '2021-09-24',
        user: 'hello@gmail.com'
    },
    {
        content: 'chào bạn, còn mình ở đây từ tối hôm qua',
        dateModified: '2021-09-24',
        user: 'hi@gmail.com'
    }
];

export default class MessageList extends BaseComponent {

    constructor(props) {
        super(props);
    }

    render() {
        let $list = document.createElement('div');

        for(let message of messages) {

            let isOwned = message.user == this.props.user.email;

            let $messageContainer = document.createElement('div');
            // kiểm tra đâu là tin nhắn của người dùng hiện tại
            $messageContainer.className = isOwned ? 'text-right' : 'text-left';

            let $messageContent = document.createElement('span');
            $messageContent.innerHTML = message.content;
            $messageContent.title = message.user + ' sent at ' + message.dateModified;
            $messageContent.className = 'mb-2 p-2 rounded d-inline-block ' + ( isOwned ? 'bg-primary text-white' : 'bg-secondary text-white');

            $messageContainer.append($messageContent);

            $list.append($messageContainer);
        }

        return $list;
    }
}