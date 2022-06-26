// sigin in 
var emailInput = document.getElementById('emailInput');
var passInput = document.getElementById('passInput');
var nameInput = document.getElementById('nameInput');
var welcomeDiv = document.getElementById('welcomeDiv');

// sign in check
var loginInputReq = document.getElementById('loginInputReq');
var loginUserError = document.getElementById('loginUserError');

// sign up
var newEmailInput = document.getElementById('newEmailInput');
var newPassInput = document.getElementById('newPassInput');
var signUpBtn = document.getElementById('signUpBtn');
var loginBtn = document.getElementById('loginBtn');

// sign up check
var success = document.getElementById('success');
var emailExist = document.getElementById('emailExist');
var inputsReq = document.getElementById('inputsReq');

// log out
var logoutBtn = document.getElementById('logoutBtn');

// //
var data = localStorage.getItem('data')
data = JSON.parse(data);
var users = data;
var home = document.getElementById('home');









// create account 
if (signUpBtn != null) {
    signUpBtn.addEventListener('click', function () { creatAccount() })
}

function creatAccount() {
    var singleUser = { name: nameInput.value, email: newEmailInput.value, pass: newPassInput.value };
    var userCheck = users.filter(function (user) { return user.email == singleUser.email });

    if (userCheck == false && singleUser.name != '' && singleUser.email != '' && singleUser.pass != '') {
        users.push(singleUser);
        localStorage.setItem('data', JSON.stringify(users));

        success.style.display = 'block';
        emailExist.style.display = 'none';
        inputsReq.style.display = 'none';
    }

    else if (singleUser.name == '' || singleUser.email == '' || singleUser.pass == '') {
        inputsReq.style.display = 'block';
        success.style.display = 'none';
        emailExist.style.display = 'none';
    }
    else {
        emailExist.style.display = 'block';
        success.style.display = 'none';
        inputsReq.style.display = 'none';
    }
}






// login
if (loginBtn != null) {
    loginBtn.addEventListener('click', function () { checkUser() });
}

function checkUser() {
    var username;
    users.forEach(function (user) {
        if (emailInput.value == user.email && passInput.value == user.pass) {
            username = user.name;
            localStorage.setItem('username', username);
            loginBtn.setAttribute('href', 'home.html');
        }

        else if (emailInput.value == '' || passInput.value == '') {
            loginInputReq.style.display = 'block'
            loginUserError.style.display = 'none'
        }

        else {
            loginUserError.style.display = 'block'
            loginInputReq.style.display = 'none'
        }
    })

}

function displayData() {
    welcomeDiv.innerHTML = 'Welcome ' + localStorage.getItem('username');
}



// log out 
if (logoutBtn != null) {
    logoutBtn.addEventListener('click', function () { logout() })
}

function logout() {
    loginBtn.removeAttribute('href')
}









