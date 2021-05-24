var xhr = new XMLHttpRequest(),
    arr,
    container = document.getElementById('container');

//Получение JSON
document.getElementById('button').addEventListener('click', function sendXhr() {
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();
    xhr.onload = function () {
        var status = +String(this.status)[0];
        if (status === 2) {
            xhr = JSON.parse(xhr.responseText);
            arr = xhr.data;
            //Создание блока навигации
            var createNavi = document.createElement('div');
            createNavi.id = 'navi';
            container.appendChild(createNavi);

            //Создание блока карточки
            var createUserInfo = document.createElement('div');
            createUserInfo.id = 'user_info';
            container.appendChild(createUserInfo);
            createNaviInfo();
            createProfileCar(arr[0]);

            //Создание блоков Navi
            function createNaviInfo() {
                var navi = document.getElementById('navi');
                for (var i = 0; i < arr.length; i++) {
                    var profile = document.createElement('DIV');
                    profile.id = i;
                    profile.className = 'user__profile';
                    profile.innerHTML = 'Пользователь ' + i;
                    navi.appendChild(profile);
                }
            }
            //Передача данных в карточку по клику
            document.getElementById('navi').addEventListener('click', function (e) {
                if (e.target.className === 'user__profile') {
                    var userId = e.target.id;
                    var deleteId = document.getElementById('user_info');
                    while (deleteId.firstChild) {
                        deleteId.removeChild(deleteId.firstChild);
                    }
                    var user = arr[userId];
                    createProfileCar(user);
                }
            });

            //Наполнение карточки
            function createProfileCar(e) {
                var addProfileInfo = e,
                    userInfo = document.getElementById('user_info'),
                    firsBlock = document.createElement('div'),
                    secondBlock = document.createElement('div');

                userInfo.appendChild(firsBlock);
                userInfo.appendChild(secondBlock);

                //Add img
                var img = document.createElement('IMG');
                img.src = addProfileInfo.avatar;
                firsBlock.appendChild(img);

                //Add First name
                var firstName = document.createElement('P');
                firstName.textContent = 'FirstName: ' + addProfileInfo.first_name;
                secondBlock.appendChild(firstName);
                //Add Last name
                var lastName = document.createElement('P');
                lastName.textContent = 'FirstName: ' + addProfileInfo.last_name;
                secondBlock.appendChild(lastName);

                //Add email
                var email = document.createElement('P');
                email.textContent = 'Email: ' + addProfileInfo.email;
                secondBlock.appendChild(email);
            }
        } else {
            container.insertAdjacentHTML('afterend', '<h1>Опа, ошибочка вышла</h1>');
        }
    };
});
