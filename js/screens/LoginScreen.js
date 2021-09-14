import BaseComponent from "../BaseComponent.js";
import InputWrapper from "../components/InputWrapper.js";
import { login } from "../models/user.js";

import { appendTo, validateEmail } from "../utils.js";

export default class LoginScreen extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            // lưu dữ liệu người dùng nhập vào
            data: {
                email: '',
                password: '',
            },

            // lưu thông tin về lỗi của các truờng thông tin
            errors: {
                email: '',
                password: '',
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
        $title.innerHTML = "Sign in to your account";

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

        let $btn = document.createElement('button');
        $btn.classList.add('btn', 'btn-primary', 'btn-block');
        $btn.innerHTML = "Login";

        let $form = document.createElement('form');
        $form.onsubmit = this.handleLogin;
        // $form.append(
        //     _email.render(),
        //     _password.render(),
        //     $btn
        // );

        appendTo($form, _email, _password);

        $form.append($btn);

        // HTMLElement || Node || HTML String
        $container.append(
            $title,
            $form
        );

        return $container;
    }

    handleLogin = (event) => {
        event.preventDefault(); // chặn chuyển hướng đến action

        let data = this.state.data;
        let errors = this.state.errors;
        errors.email = '';
        errors.password = '';

        let isPassed = true;

        if (data.email == '' || !validateEmail(data.email)) {
            errors.email = 'Invalid email';
            isPassed = false;
        }

        if (data.password == '') {
            errors.password = "Invalid password";
            isPassed = false;
        }

        if(isPassed) {
            login(data.email, data.password);
            return;
        }

        let tmpState = this.state;
        tmpState.errors = errors;
        this.setState(tmpState);

        // this.setState({ data: data, errors: errors });

    }
}