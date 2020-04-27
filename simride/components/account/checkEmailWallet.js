import firebase from '../../base';

// checks email and signs user out if no such email found
checkEmailWallet((e) => {
    const email = firebase.auth().currentUser.email;

    user[3] = email;

    const accountsRef = firebase.database().ref('accounts');
    accountsRef.orderByChild('email')
        .equalTo(user[3])
        .once('value')
        .then((snapshot) => {
            snapshot.forEach((child) => {
                user[0] = child.val().fname;
                user[1] = child.val().lname;
                user[2] = child.val().uname;
                user[4] = child.val().phone;
                user[5] = child.val().isDriver;
                user[6] = child.val().isAdmin;
                user[7] = child.val().isBanned;
                user[8] = child.val().wallet;
                user[9] = child.key;
            });
        }).then(() => {
            if (typeof user[3] === 'undefined') {
                firebase.auth().signOut();
            } else {
                if (user[6] !== "") {
                    this.walletHomePage();
                    if (user[6].toLowerCase() === 'yes') {
                        document.getElementById("btnTopUpPage").style.display = "none";
                        document.getElementById("tbl_last5").style.display = "none";
                    }
                }
            }
        });
})

module.exports.checkEmailWallet = checkEmailWallet;