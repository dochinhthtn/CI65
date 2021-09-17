import BaseComponent from "../BaseComponent.js";
import data from '../data/chat.js';

export default class ChatList extends BaseComponent {
    render() {
        let $container = document.createElement('div');

        let $create = document.createElement('button');
        $create.innerHTML = '+ Create chat group';
        $create.className = 'btn btn-primary btn-block mb-3';

        let $list = document.createElement('div');
        $list.className = 'list-group';

        for (let item of data) {
            let $item = document.createElement('a');
            $item.innerHTML = item.name + ' - ' + item.dateModified;
            $item.className = 'list-group-item list-group-item-action';

            $list.append($item);
        }

        $container.append($create, $list);

        return $container;
    }
}