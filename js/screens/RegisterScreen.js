import BaseComponent from "../BaseComponent.js";
import InputWrapper from "../components/InputWrapper.js";
import { register } from "../models/user.js";

import { appendTo, validateEmail } from "../utils.js";

export default class RegisterScreen extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            // lưu dữ liệu người dùng nhập vào
            data: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },

            // lưu thông tin về lỗi của các truờng thông tin
            errors: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        };
    }

    /**
     * Xử lý sự kiện onchange của ô input
     */
    handleInputChange = (fieldName, fieldValue) => {
        // console.log(fieldName + ' = ' + fieldValue);
        let tmpState = this.state;
        tmpState.data[fieldName] = fieldValue.trim();
        this.setState(tmpState);
    }

    render() {
        let $container = document.createElement('div');

        let $title = document.createElement('h2');
        $title.classList.add('text-center');
        $title.innerHTML = "Create an account";

        let _name = new InputWrapper({
            placeholder: 'Your name',
            type: 'text',
            error: this.state.errors.name,
            value: this.state.data.name,
            onchange: (event) => {
                this.handleInputChange('name', event.target.value);
            }
        });

        let _email = new InputWrapper({
            placeholder: 'Email',
            type: 'email',
            error: this.state.errors.email,
            value: this.state.data.email,
            onchange: (event) => {
                this.handleInputChange('email', event.target.value);
            }
        });

        let _password = new InputWrapper({
            placeholder: 'Password',
            type: 'password',
            error: this.state.errors.password,
            value: this.state.data.password,
            onchange: (event) => {
                this.handleInputChange('password', event.target.value);
            }
        });

        let _confirmPassword = new InputWrapper({
            placeholder: 'Confirm password',
            type: 'password',
            error: this.state.errors.confirmPassword,
            value: this.state.data.confirmPassword,
            onchange: (event) => {
                this.handleInputChange('confirmPassword', event.target.value);
            }
        });

        let $btn = document.createElement('button');
        $btn.classList.add('btn', 'btn-primary', 'btn-block');
        $btn.innerHTML = "Register";

        let $form = document.createElement('form');
        $form.onsubmit = this.handleRegister;
        appendTo($form, _name, _email, _password, _confirmPassword);
        // $form.append(_name.render(), _email.render(), _password.render(), _confirmPassword.render(), $btn);
        $form.append($btn);

        // HTMLElement || Node || HTML String
        $container.append(
            $title,
            $form
        );

        return $container;
    }

    handleRegister = (event) => {
        event.preventDefault(); // chặn chuyển hướng đến action
        console.log('hit');
        let data = this.state.data;
        let errors = this.state.errors;
        errors.name = '';
        errors.email = '';
        errors.password = '';
        errors.confirmPassword = '';

        let isPassed = true;

        if(data.name == '') {
            errors.name = 'Invalid name';
            isPassed = false;
        }

        if(data.email == '' || !validateEmail(data.email)) {
            errors.email = 'Invalid email';
            isPassed = false;
        }

        if(data.password == '') {
            errors.password = 'Invalid password';
            isPassed = false;
        }

        if(data.confirmPassword == '') {
            errors.confirmPassword = 'Invalid password confirmation';
            isPassed = false;
        }

        if(data.password != '' && data.confirmPassword != '' && data.password != data.confirmPassword) {
            errors.confirmPassword = 'Password confirmation is not correct';
            isPassed = false;
        }

        if(isPassed) {
            register(data.name, data.email, data.password);
            return;
        }
        
        let tmpState = this.state;
        tmpState.errors = errors;
        this.setState(tmpState);
        console.log(this.state);
    }
}