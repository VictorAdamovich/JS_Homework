var xhr = new XMLHttpRequest();
var arr;

//Получение JSON
document.getElementById('button').addEventListener('click', function sendXhr() {
    xhr.open("GET", "https://reqres.in/api/users?page=2", true);
    xhr.send();
    xhr.onload = function () {
        var status = +String(this.status)[0];
        if(status ===  2) {
            xhr = JSON.parse(xhr.responseText)
            arr = xhr.data
            var container = document.getElementById('container')
            var createUserInfo = document.createElement('div');
            createUserInfo.id = 'user_info';
            container.appendChild(createUserInfo);
            createNavi();
            createProfileCar(arr[0]);
        }
        else {
        }
    };
})

document.getElementById('navi').addEventListener('click', function (event) {
    var status = +String(this.status)[0];
    if (event.target.className === 'user__profile') {
        var user = event.target.id
        var active = event.target
        var t = document.getElementById('user_info')
        active.classList.add('active')
        var test = arr[user]
        while (t.firstChild) {
            t.removeChild(t.firstChild);
        }
        createProfileCar(test)
    }
})

//Создание блоков Navi
function createNavi() {
    var navi = document.getElementById('navi');
    for (var i = 0; i < arr.length; i++) {
        var profile = document.createElement('DIV')
        profile.id = i;
        profile.className = 'user__profile'
        profile.innerHTML = 'Пользователь ' + i;
        navi.appendChild(profile)
    }
}

//Создание карточки и navi
function createProfileCar(e) {
    var addProfileInfo = e
    var userInfo = document.getElementById('user_info')

    //Add img
    var img = document.createElement("IMG");
    img.src = addProfileInfo.avatar;
    userInfo.appendChild(img);

    //Add First name
    var firstName = document.createElement('P');
    firstName.textContent = 'FirstName: ' + addProfileInfo.first_name
    userInfo.appendChild(firstName);
    //Add Last name
    var lastName = document.createElement('P');
    lastName.textContent = 'FirstName: ' + addProfileInfo.last_name
    userInfo.appendChild(lastName);

    //Add email
    var email = document.createElement('P')
    email.textContent = 'Email: ' + addProfileInfo.email
    userInfo.appendChild(email);
}






