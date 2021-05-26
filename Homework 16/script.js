document.getElementById('button').addEventListener('click', function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=2');

    xhr.send();
    xhr.onload = function () {
        var status = +String(this.status)[0];
        if (status === 2) {
            var userInfo = JSON.parse(xhr.responseText).data;

            //Создаём блок навигации
            var createNavi = document.createElement('div');
            createNavi.id = 'navi';
            container.appendChild(createNavi);

            //Наполняем блок Navi
            function createNaviFunc(e) {
                for (var i = 0; i < e; i++) {
                    var a = document.createElement('div');
                    a.className = 'navi__user';
                    a.id = i;
                    a.innerHTML = 'Пользователь ' + (i + 1);
                    createNavi.append(a);
                }
            }

            createNaviFunc(userInfo.length);

            document.getElementById(0).classList.add('active');

            //Создаём карточку
            var createUserInfo = document.createElement('div');
            createUserInfo.id = 'user_info';
            container.appendChild(createUserInfo);

            //Наполняем карточку по клику
            document.getElementById('navi').addEventListener('click', function (e) {

                if (e.target.className === 'navi__user') {
                    var userId = e.target.id,
                        deleteId = document.getElementById('user_info');

                    while (deleteId.firstChild) {
                        deleteId.removeChild(deleteId.firstChild);
                    }
                    var user = userInfo[userId];
                    createProfileCar(user);
                }
            })
            createProfileCar(userInfo[0]);

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
                lastName.textContent = 'LastName: ' + addProfileInfo.last_name;
                secondBlock.appendChild(lastName);

                //Add email
                var email = document.createElement('P');
                email.textContent = 'Email: ' + addProfileInfo.email;
                secondBlock.appendChild(email);
            }

            //Подсветка активной вкладки
            document.getElementById('navi').addEventListener('click', function (e) {
                var highlightNavi = document.getElementsByClassName('navi__user');
                for (var i = 0; i < highlightNavi.length; i++) {
                    highlightNavi[i].classList.remove('active');
                }
                e.target.classList.add('active');
            })
        } else {
            document.body.innerHTML = 'FAILD: ' + this.status;
        }
    }
})