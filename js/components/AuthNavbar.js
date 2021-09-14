import BaseComponent from "../BaseComponent.js";

export default class AuthNavbar extends BaseComponent {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        let $container = document.createElement('nav');
        $container.className = 'navbar navbar-expand-lg navbar-light bg-light'; // ghi đè class
        
        let $brand = document.createElement('a');
        $brand.className = 'navbar-brand';
        $brand.href = "#";
        $brand.innerHTML = 'WebChat';

        let $home = document.createElement('a');
        $home.className = 'nav-link';
        $home.href = '#';
        $home.innerHTML = 'Home';

        let $action = document.createElement('div');
        $action.className = 'ml-auto'; // margin-left: auto => dạt về tay phải

        let $profile = document.createElement('button');
        $profile.className = 'btn btn-primary mr-3'; // nền xanh, chữ trắng
        $profile.innerHTML = 'Welcome, ' + (this.props.name ?? 'Someone');

        // if(this.props.name != undefined || this.props.name != null) {
        //     // someone
        // }

        let $logout = document.createElement('button');
        $logout.className = 'btn btn-danger'; // nền đỏ, chữ trắng
        $logout.innerHTML = 'Logout';

        $action.append($profile, $logout);

        $container.append($brand, $home, $action);        

        return $container;
    }
}