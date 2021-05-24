var xhr = new XMLHttpRequest();
var arr;

//Получение JSON
document.getElementById('button').addEventListener('click', function sendXhr() {
    xhr.open("GET", "https://reqres.in/api/users?page=2", true);
    xhr.send();
    xhr.onload = function () {
        var statusType = Math.round(this.status / 100);
        if(statusType === 2 || statusType === 3) {
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
            alert('Нужно сделать, нормально');
        }
    };
})

document.getElementById('navi').addEventListener('click', function (event) {
    if (event.target.className === 'user__profile') {
        var user = event.target.id
        var active = event.target
        active.classList.add('active')
        var test = arr[user]
        var t = document.getElementById('user_info')
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


//Создание карточки
function createProfileCar(test) {
    var test2 = test
    var userInfo = document.getElementById('user_info')

    //Add img
    var img = document.createElement("IMG");
    img.src = test2.avatar;
    userInfo.appendChild(img);

    //Add First name
    var firstName = document.createElement('P');
    firstName.textContent = 'FirstName: ' + test2.first_name
    userInfo.appendChild(firstName);
    //Add Last name
    var lastName = document.createElement('P');
    lastName.textContent = 'FirstName: ' + test2.last_name
    userInfo.appendChild(lastName);

    //Add email
    var email = document.createElement('P')
    email.textContent = 'Email: ' + test2.email
    userInfo.appendChild(email);
}






