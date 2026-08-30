 let currentPassword = 123;   
            function Login(){

                const user=document.getElementById('username').value;
                const pass=document.getElementById('password').value;
                if(user=='admin'&& pass==currentPassword){
                    window.open('index3.html','_blank');

                }
                else{
                    window.alert("anvalid pass or username")
                }
             
            }
            
              
function resetPassword() {
  let newPass = prompt("Enter new password (min 8 characters):");
  if (newPass.length >= 8) {
    currentPassword = newPass;
    showMessage("Password reset successfully.");
  } else {
    showMessage("Password too short.");
  }
}

function showMessage(msg) {
  document.getElementById("result").innerHTML = msg;
}