import firebase from '../../base';
import 'firebase/firestore';

// view reported users
viewReportedList(() => {
    const self = this;
    document.getElementById('tb_ReportedUsers').innerHTML = '';

    const database = firebase.database().ref('reportedUsers').orderByChild('lastReportDate');
    database.once('value', (snapshot) => {
        if (snapshot.exists()) {
            let content = '';
            let rowCount = 0;
            snapshot.forEach((data) => {
                let username = data.val().username;
                let lastDate = new Date(data.val().lastReportDate * -1);
                let status = data.val().status;
                console.log(username, lastDate);
                content += '<tr id=\'' + data.key + '\'>';
                content += '<td>' + username + '</td>'; //column1
                content += '<td>' + lastDate.toDateString() + '</td>'; //column2
                content += '<td>' + status + '</td>';
                content += '<td id=\'btnViewReportedUser' + rowCount + '\'></td>';
                content += '</tr>';

                rowCount++;
                console.log(rowCount, content);
            });

            document.getElementById('tb_ReportedUsers').innerHTML += content;

            for (let v = 0; v < rowCount; v++) {
                let btn = document.createElement('input');
                btn.setAttribute('type', 'button')
                btn.setAttribute('value', 'View');
                btn.onclick = self.viewReportedUser;
                document.getElementById('btnViewReportedUser' + v).appendChild(btn);
            }
        }
    });
})

module.export.viewReportedList = viewReportedList;