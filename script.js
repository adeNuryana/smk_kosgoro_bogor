// membuat validasi login
// user = document.getElementById('username').value;
function validationLogin(){
    user = document.forms["login"]["username"].value;
    username = "admin";
    pass = document.getElementById('password').value;
    if(user == username){
        if(pass =="123"){
            alert("selamat udah login");
        }else{
            alert("password salah");}
    }else{
        alert("maaf username salah");
    }
}