const form = document.querySelector(".validator-form");
console.log(form);
form.addEventListener("submit", submissionform);
function submissionform(e) {
  e.preventDefault();
  console.log("form submitted");
  const userName = document.getElementById("userName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirm_password")
    .value.trim();
  const register = document.getElementById("submit-btn");
  const letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letters = userName.split("");
  const alphaletters = letters.every((char) => letter.includes(char));
  let valid = true;
  if (userName === "") {
    document.getElementById("usernameError").innerHTML =
      "*Input field is empty";
      valid=false;
  } else if (!alphaletters) {
    document.getElementById("usernameError").innerHTML =
      "*Alphabetics letters are required";
      valid=false;
  } else {
    document.getElementById("usernameError").innerHTML = "";
  }
   const emailContain=email.split("");
  if (email === "") {
    document.getElementById("emailError").innerHTML =
      "*Input field is empty";
      valid=false;
  } 
  else if (!emailContain.includes("@")) {
     document.getElementById("emailError").innerHTML =
     "*Email must inculde '@' symbol ";
      valid=false;
  }
  else {
    document.getElementById("emailError").innerHTML = "";
  }
   const mySymbol="@!#$%^&*~?";
   const passwordContain = mySymbol.split("").some(char=>password.includes(char));
  if (password === "") {
    document.getElementById("passwordError").innerHTML =
      "*Input field is empty";
      valid=false;
  }
  else if (!passwordContain) {
    document.getElementById("passwordError").innerHTML =
      "*Password must contains symbol";
      valid=false;
  }
  else if (password.split("").length<=9)
    {
      document.getElementById("passwordError").innerHTML =
      "*Password must need length of more than 9 letter";
      valid=false;  
    } 
  else {
    document.getElementById("passwordError").innerHTML = "";
  }
  if (confirmPassword === "") {
    document.getElementById("confirm_passwordError").innerHTML =
      "*Input field is empty";
      valid=false;
  } else if (password !== confirmPassword) {
    document.getElementById("confirm_passwordError").innerHTML =
      "*Confirm Password and password must be same";
      valid=false;
  } else {
    document.getElementById("confirm_passwordError").innerHTML = "";
  }
}
