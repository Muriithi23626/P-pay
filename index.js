

function login() {
var user = document.getElementById("username").value;
var pass = document.getElementById("password").value;
if(user == "lab18" && pass == "lab18") {
    alert("Logged In");
    locate="new11.html"
    return false;
} else {
    alert("wrong user/pass");
    return false;
    }
}
   

      

