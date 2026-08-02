function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "admin" && pass === "1234"){

localStorage.setItem("adminLogin","true");

window.location.href = "dashboard.html";

}else{

document.getElementById("msg").innerHTML =
"بيانات الدخول غير صحيحة";

}

}
