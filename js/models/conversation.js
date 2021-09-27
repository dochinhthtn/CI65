import { getDataFromDoc, getDataFromDocs } from "../utils.js";

export async function createConversation(data) {
    data.messages = [];

    let currentEmail = auth.currentUser.email;

    if (!data.members.includes(currentEmail)) { // nếu chưa tồn tại email => push email của người dùng hiện tại
        data.members.push(currentEmail);
    }
    // groupName, members, messages
    // console.log(data);
    // thêm 1 document vào collection conversations:
    await db.collection('conversations').add(data);
}

export async function getConversations() {
    let currentEmail = auth.currentUser.email;
    // lựa chọn những cuộc hội thoại mà người dùng hiện tại tham gia
    let response = await db.collection('conversations').where('members', 'array-contains', currentEmail).get();
    return getDataFromDocs(response.docs);
}

export async function addMessage(conversationId, messageContent) {
    let message = {
        content: messageContent,
        user: auth.currentUser.email,
        dateModified: new Date().toISOString()
    };

    await db.collection('conversations').doc(conversationId).update({
        messages: firebase.firestore.FieldValue.arrayUnion(message) // thêm 1 phần tử vào mảng messages
    });
    // console.log('Message was sent');
}

export function listenConversationChanged() {

    // đồng bộ dữ liệu client - firestore
    // websocket, ajax polling, ...
    db.collection('conversations').onSnapshot((response) => {
        console.log(getDataFromDocs(response.docs));
    });
}