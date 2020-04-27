module.exports = {
    profilePageReset: function () {
        document.getElementById('tblProfile').style.display = 'block';
        document.getElementById('tblPassword').style.display = 'none';

        document.getElementById('lblfName').style.display = 'inline';
        document.getElementById('lbllName').style.display = 'inline';
        document.getElementById('lblPhone').style.display = 'inline';

        document.getElementById('editfName').style.display = 'none';
        document.getElementById('editlName').style.display = 'none';
        document.getElementById('editPhone').style.display = 'none';

        document.getElementById('editButton').style.display = 'inline';
        document.getElementById('changePasswordButton').style.display = 'inline';
        document.getElementById('submitEditButton').style.display = 'none';
        document.getElementById('cancelEditButton').style.display = 'none';
        document.getElementById('submitPasswordButton').style.display = 'none';
        document.getElementById('cancelPasswordButton').style.display = 'none';
    },

    editProfile: function () {
        document.getElementById('editfName').value = "";
        document.getElementById('editlName').value = "";
        document.getElementById('editPhone').value = "";

        document.getElementById('tblProfile').style.display = 'block';
        document.getElementById('tblPassword').style.display = 'none';

        document.getElementById('lblfName').style.display = 'none';
        document.getElementById('lbllName').style.display = 'none';
        document.getElementById('lblPhone').style.display = 'none';

        document.getElementById('editfName').style.display = 'inline';
        document.getElementById('editlName').style.display = 'inline';
        document.getElementById('editPhone').style.display = 'inline';

        document.getElementById('editButton').style.display = 'none';
        document.getElementById('changePasswordButton').style.display = 'none';
        document.getElementById('submitEditButton').style.display = 'inline';
        document.getElementById('cancelEditButton').style.display = 'inline';
        document.getElementById('submitPasswordButton').style.display = 'none';
        document.getElementById('cancelPasswordButton').style.display = 'none';
    },

    changePassword: function () {
        document.getElementById('tblProfile').style.display = 'none';
        document.getElementById('tblPassword').style.display = 'block';
        document.getElementById('tblApplyDriver').style.display = 'none';

        document.getElementById('lblfName').style.display = 'none';
        document.getElementById('lbllName').style.display = 'none';
        document.getElementById('lblPhone').style.display = 'none';

        document.getElementById('editfName').style.display = 'none';
        document.getElementById('editlName').style.display = 'none';
        document.getElementById('editPhone').style.display = 'none';

        document.getElementById('editButton').style.display = 'none';
        document.getElementById('changePasswordButton').style.display = 'none';
        document.getElementById('submitEditButton').style.display = 'none';
        document.getElementById('cancelEditButton').style.display = 'none';
        document.getElementById('submitPasswordButton').style.display = 'inline';
        document.getElementById('cancelPasswordButton').style.display = 'inline';

        document.getElementById('tblApplyDriver').style.display = 'none';
        document.getElementById('btnApplyDriver').style.display = 'none';
        document.getElementById('cancelApplyDriverButton').style.display = 'none';
        document.getElementById('btnImgFrontUpload').style.display = 'none';
        document.getElementById('btnImgBackUpload').style.display = 'none';
        document.getElementById('submitDriverDetails').style.display = 'none';

        document.getElementById('editfName').value = "";
        document.getElementById('editlName').value = "";
        document.getElementById('editPhone').value = "";
    },

    applyDriver: function () {
        document.getElementById('tblProfile').style.display = 'none';
        document.getElementById('tblPassword').style.display = 'none';
        document.getElementById('tblApplyDriver').style.display = 'block';

        document.getElementById('lblfName').style.display = 'none';
        document.getElementById('lbllName').style.display = 'none';
        document.getElementById('lblPhone').style.display = 'none';

        document.getElementById('editfName').style.display = 'none';
        document.getElementById('editlName').style.display = 'none';

        document.getElementById('editButton').style.display = 'none';
        document.getElementById('changePasswordButton').style.display = 'none';
        document.getElementById('submitEditButton').style.display = 'none';
        document.getElementById('cancelEditButton').style.display = 'none';
        document.getElementById('submitPasswordButton').style.display = 'none';
        document.getElementById('cancelPasswordButton').style.display = 'none';
        document.getElementById('btnApplyDriver').style.display = 'none';
        document.getElementById('cancelApplyDriverButton').style.display = 'inline-block';
        document.getElementById('btnImgFrontUpload').style.display = 'none';
        document.getElementById('btnImgBackUpload').style.display = 'none';
        document.getElementById('submitDriverDetails').style.display = 'inline-block';
    },

    cancelApplyDriver: function () {
        document.getElementById('tblApplyDriver').style.display = 'none';
        document.getElementById('btnApplyDriver').style.display = 'block';
        document.getElementById('cancelApplyDriverButton').style.display = 'none';
        document.getElementById('btnImgFrontUpload').style.display = 'none';
        document.getElementById('btnImgBackUpload').style.display = 'none';
        document.getElementById('submitDriverDetails').style.display = 'none';
    }
};