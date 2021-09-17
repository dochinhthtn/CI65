import BaseComponent from '../BaseComponent.js';
import AuthNavbar from '../components/AuthNavbar.js';
import InputWrapper from '../components/InputWrapper.js';
import { createConversation } from '../models/conversation.js';

import { appendTo } from '../utils.js';
export default class CreateChatGroupScreen extends BaseComponent {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                groupName: '',
                members: []
            },
            errors: {
                groupName: '',
                members: []
            }
        }
    }

    handleInputChange = (fieldName, fieldValue, fieldIndex = 0) => {
        let tmpState = this.state;

        if(fieldName == 'groupName') {
            tmpState.data.groupName = fieldValue;
        } else if(fieldName == 'member') {
            tmpState.data.members[fieldIndex] = fieldValue;
        }

        this.setState(tmpState);
    }

    handleAddMember = () => {
        let tmpState = this.state;
        tmpState.data.members.push('');
        tmpState.errors.members.push('');
        this.setState(tmpState);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let tmpState = this.state;
        let data = tmpState.data;
        let errors = tmpState.errors;

        let isPassed = true;

        if(data.groupName.trim() == '') {
            errors.groupName = 'Invalid group name';
            isPassed = false;
        } else {
            errors.groupName = '';
        }

        for(let i = 0; i < data.members.length; i++) {
            if(data.members[i].trim() == '') {
                errors.members[i] = 'Invalid member #' + (i + 1);
                isPassed = false;
            } else {
                errors.members[i] = '';
            }
        }

        if(isPassed) {
            createConversation(this.state.data);
        }

        this.setState(tmpState);
        
    }

    render() {
        let $container = document.createElement('div');

        let _navbar = new AuthNavbar({});
        appendTo($container, _navbar);

        let $form = document.createElement('form');
        $form.onsubmit = this.handleSubmit;

        let $formTitle = document.createElement('h4');
        $formTitle.innerHTML = 'Create chat group';

        let _groupName = new InputWrapper({
            placeholder: 'Group name',
            type: 'text',
            value: this.state.data.groupName,
            error: this.state.errors.groupName,
            onchange: (event) => { this.handleInputChange('groupName', event.target.value); }
        });

        let $h5 = document.createElement('h5');
        $h5.innerHTML = 'Member List';

        let $memberList = document.createElement('div');

        for(let i = 0; i < this.state.data.members.length; i++) {
            let _member = new InputWrapper({
                placeholder: 'Member #' + (i + 1),
                type: 'email',
                value: this.state.data.members[i],
                error: this.state.errors.members[i],
                onchange: (event) => { this.handleInputChange('member', event.target.value, i) }
            });
            appendTo($memberList, _member);
        }

        let $addBtn = document.createElement('button'); 
        $addBtn.type = 'button';
        $addBtn.className = 'btn btn-secondary float-right mb-3';
        $addBtn.innerHTML = 'Add member';
        $addBtn.onclick = this.handleAddMember;

        let $submitBtn = document.createElement('button');
        $submitBtn.className = 'btn btn-primary btn-block';
        $submitBtn.innerHTML = 'Create'

        $form.append($formTitle);
        appendTo($form, _groupName);
        $form.append($h5, $memberList, $addBtn, $submitBtn);

        $container.append($form);
        return $container;
    }
}