import BaseComponent from "../BaseComponent.js";

export default class ChatList extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let $container = document.createElement('div');

        let $create = document.createElement('button');
        $create.innerHTML = '+ Create chat group';
        $create.className = 'btn btn-primary btn-block mb-3';
        $create.onclick = () => {
            router.navigate('/create-group');
        }

        let $list = document.createElement('div');
        $list.className = 'list-group';

        for (let item of this.props.conversations) {
            let $item = document.createElement('a');
            $item.style.cursor = 'pointer';
            $item.innerHTML = `
                <b>${item.groupName}</b><br>
                <small>${item.members.length} members</small>
            `;
            $item.className = 'list-group-item list-group-item-action';
            $item.onclick = () => {
                if(!this.props.setCurrentConversation) return;
                this.props.setCurrentConversation(item.id);
            }

            if(this.props.currentConversation) {
                $item.className += (item.id == this.props.currentConversation.id) ? ' active' : '';
            }

            $list.append($item);
        }

        $container.append($create, $list);

        return $container;
    }
}