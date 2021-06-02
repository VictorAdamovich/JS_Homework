document.getElementById('button').addEventListener('submit', function () {
    var userMail = document.getElementById('mail').value;
    var userPass = document.getElementById('password').value;



    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/register');
    xhr.setRequestHeader('Content-Type', 'application/json');



    xhr.onload = function(){
        var statusType = Math.round(this.status / 100);
        if(statusType === 2 || statusType === 3){
            var getAnswer = JSON.parse(this.response).id;
            localStorage.setItem('userId', JSON.stringify(getAnswer));
            var userId = JSON.parse(localStorage.getItem('userId'));
            var getForm = document.getElementById('form');
            delete getForm;
            var message = document.createElement('div');
            message.innerHTML = '<p>"User (id) has been successfully registered"</p>';
            document.body.appendChild(message);

        }else{
            document.body.innerHTML += '<p>"User (id) has been successfully registered"</p>';
        }
    };

    xhr.onerror = function() {
        console.error(this.status)
    };

    xhr.onloadend = function() {
        console.log('Запрос завершен');
    };





    xhr.send(JSON.stringify({
        "email": userMail,
        "password": userPass
    }));





});



