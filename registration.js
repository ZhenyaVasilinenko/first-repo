let name, mail, phone, password;
let trueFields;
document.getElementById('button').onclick = function(){
    trueFields = 0;
    if (document.getElementById('name').value.match(/^[A-ZА-Я]{4,}$/i)){
        name = document.getElementById('name').value;
        trueFields++;
    }
    if (document.getElementById('email').value.match(/^([a-z0-9]{4,10})+@([a-z]{4,10})+.([a-z]{2,5})$/i)){
        mail = document.getElementById('email').value;
        trueFields++;
    }
    if (document.getElementById('phone').value.match(/^\+\(380\)\d{2}\-\d{3}-\d{2}-\d{2}$|^\+380\d{9}$/)){
        phone = document.getElementById('phone').value;
        trueFields++;
    }
    if (document.getElementById('pass').value.match(/^[A-Z0-9]{4,}$/i) == document.getElementById('confirm-pass').value){
        password = document.getElementById('pass').value;
        trueFields++;
    }

    if (trueFields == 4){
        alert('All good');
        password = document.getElementById('pass').value;
        mail = document.getElementById('email').value;
        name = document.getElementById('name').value;
        localStorage.setItem('name', name);
        localStorage.setItem('pass', password );
        localStorage.setItem('email', mail );
        location.href="login.html"
    }
    else {
        alert("Something Wrong");
    }

};
