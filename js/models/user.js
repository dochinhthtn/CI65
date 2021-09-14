export async function register(name, email, password) {

    try {
        let response = await auth.createUserWithEmailAndPassword(email, password); // xảy ra hiện tượng bất đồng bộ
        console.log(response);
        console.log("Register successfully");
        console.log(auth.currentUser);
    } catch(error) {
        alert(error.message);
    }
}

export async function login(email, password) {

    try {
        await auth.signInWithEmailAndPassword(email, password);
        console.log('Sign in successfully');
    } catch(error) {
        alert(error.message);
    }

}

export function getCurrentUser() {

}

export function updateUser() {

}

export function logout() {

}