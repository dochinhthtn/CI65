import { getDataFromDocs } from "../utils.js";

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
    console.log('Create conversation successfully');
}

export async function getConversations() {
    let currentEmail = auth.currentUser.email;
    // lựa chọn những cuộc hội thoại mà người dùng hiện tại tham gia
    let response = await db.collection('conversations').where('members', 'array-contains', currentEmail).get();
    console.log(response.docs);
    return getDataFromDocs(response.docs);
}