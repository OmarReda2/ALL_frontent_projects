var bookmarkName = document.getElementById('bookmarkName');
var bookmarkURL = document.getElementById('bookmarkURL');
var addBtn = document.getElementById('addBtn');


if (localStorage.getItem('data') != null) {
    var data = localStorage.getItem('data')
    var bookmarkList = JSON.parse(data);
    displayBookmark();
}else {
    bookmarkList = [];

}




function createBookmark() {
    if (validation() == true) {
        var singleBookmark = {
            name: bookmarkName.value,
            URL: bookmarkURL.value,
        }

        bookmarkList.push(singleBookmark)

        localStorage.setItem('data', JSON.stringify(bookmarkList));
        displayBookmark();
    }
}
addBtn.addEventListener('click', createBookmark);





function displayBookmark() {

    var trs = '';
    for (var i = 0; i < bookmarkList.length; i++) {
        trs += `<tr>
        <td>${bookmarkList[i].name}</td>
        <td><a class="btn btn-outline-success" href="${bookmarkList[i].URL}"><i class="fas fa-sign-in-alt"></i></a></td>
        <td><button class="btn btn-outline-warning" onclick="deleteBookmark(${i})"><i class="fas fa-trash-alt"></i></button></td>
    </tr>`;
    }

    document.getElementById('tbody').innerHTML = trs;
}





function deleteBookmark(x) {
    bookmarkList.splice(x, 1);
    localStorage.setItem('data', JSON.stringify(bookmarkList));

    displayBookmark();
}





var validationAlert = document.getElementById('alert')
function validation() {
    var regex = /^https:\/\/|http:\/\//;
    if (regex.test(bookmarkURL.value)) {
        validationAlert.style.display = 'none';
        return true;
    }

    else {
        validationAlert.style.display = 'block';
        return false;
    }
}
bookmarkURL.addEventListener('blur', validation);


