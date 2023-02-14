// Step 01: add click event handler with the submit button
const abc = document.getElementById("btn-submit").addEventListener("click", function () {
  //   console.log("submit button checked");
  // Step 02: get the email address inside the email input field
  const emaliField = document.getElementById("user-email");
  // Note:- ekta input field theke value pete always .value use korte hbe
  const email = emaliField.value;
  // Step 03: get the password inside the passoword field
  // Step 03.A: set id on the HTML file
  // Step 03.B: get the element on the js file
  const passwordField = document.getElementById("user-password");
  // Step 03.C: get the value from the element
  const password = passwordField.value;
  // Step 04 varify email and password
  if (email === "aminulislamemon2002@gmail.com" && password === "0000") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid user Email and Email Password");
  }
});
