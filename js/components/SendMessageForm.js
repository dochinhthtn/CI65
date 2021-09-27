import BaseComponent from "../BaseComponent.js";
import { addMessage } from "../models/conversation.js";

export default class SendMessageForm extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            messageContent: ''
        };
    }

    handleInputChange = (value) => {
        let tmpState = this.state;
        tmpState.messageContent = value.trim();
        this.setState(tmpState);
        // this.setState({ messageContent: value });
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        if (this.state.messageContent != '' && this.props.currentConversation) {
            // console.log('Send message: ' + this.state.messageContent + ' at conversation ' + this.props.currentConversation.id);
            await addMessage(this.props.currentConversation.id, this.state.messageContent);

            this.setState({ messageContent: '' });
        }
    }

    render() {
        let $form = document.createElement('form');
        $form.className = 'd-flex';
        $form.onsubmit = this.handleFormSubmit;

        let $input = document.createElement('input');
        $input.className = 'form-control mr-2';
        $input.placeholder = 'Enter your message';
        $input.value = this.state.messageContent;
        $input.onchange = (event) => {
            this.handleInputChange($input.value);
        }

        let $btn = document.createElement('button');
        $btn.className = 'btn btn-primary';
        $btn.innerHTML = 'Send';

        $form.append($input, $btn);

        return $form;
    }

}