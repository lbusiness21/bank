const displayNameHolder = document.getElementById('displayNameHolder');
const jinaHolder = document.getElementById('jinaHolder');
const photoHolder = document.getElementById('photoHolder');
const bitcoinHolder = document.getElementById('bitcoinHolder');


const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    console.log(user);
    if(user.displayNameHolder)
        displayNameHolder.innerText = user.displayName;
        jinaHolder.innerText = user.displayName;
        bitcoinHolder.innerText = "Invoice to: " + " " + user.displayName;
})
