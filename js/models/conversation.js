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