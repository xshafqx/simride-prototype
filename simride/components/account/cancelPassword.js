cancelPassword(() => {
    Util.profilePageReset();

    if (user[6] !== "") {
        document.getElementById('btnApplyDriver').style.display = "none";
    } else {
        if (user[5] === "no") {
            this.checkDriverApplicationStatus();
        }
    }

    document.getElementById('tblApplyDriver').style.display = 'none';
    document.getElementById('cancelApplyDriverButton').style.display = 'none';
    document.getElementById('btnImgFrontUpload').style.display = 'none';
    document.getElementById('btnImgBackUpload').style.display = 'none';
    document.getElementById('submitDriverDetails').style.display = 'none';
})

module.exports.cancelPassword = cancelPassword;