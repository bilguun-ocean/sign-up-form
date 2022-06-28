
function validate_password() {
  var pass = document.getElementById('pass').value;
  var conf_pass = document.getElementById('conf-pass').value;
  console.log(pass);
  console.log(conf_pass);
  console.log("Button Clicked");
  if (pass == conf_pass ){
    var indicator = document.getElementById('pass-indicator');
    indicator.classList.add("valid.password");
  } else {
    var indicator = document.getElementById('pass-indicator');
    indicator.classList.add("wrong.password");
  }
}

const button = document.getElementById("button");
button.addEventListener("click", alert("Button CLICKED"));
