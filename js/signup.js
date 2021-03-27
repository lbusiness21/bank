const mailField = document.getElementById('mail');
const passwordField = document.getElementById('password');
const signUp = document.getElementById('signUp');

const auth = firebase.auth();

auth.useDeviceLanguage();

const signUpFunction = () => {
    const email = mailField.value;
    const password = passwordField.value;
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        window.location.assign('huntington.html');
    })
    .catch(error => {
        console.error(error);
    })
}

signUp.addEventListener('click', signUpFunction);
