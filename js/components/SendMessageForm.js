import BaseComponent from "../BaseComponent.js";

export default class SendMessageForm extends BaseComponent {

    render() {
        let $form = document.createElement('form');
        $form.className = 'd-flex';

        let $input = document.createElement('input');
        $input.className = 'form-control mr-2';
        $input.placeholder = 'Enter your message';

        let $btn = document.createElement('button');
        $btn.className = 'btn btn-primary';
        $btn.innerHTML = 'Send';

        $form.append($input, $btn);

        return $form;
    }

}