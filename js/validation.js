const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
// add events
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelectorAll(".error-text").forEach((m) => {
    m.innerHTML = "";
  });
  const valid = isValidate();
  if (valid) {
    clearInput();
    setTimeout(()=>{
      alert('Your form is Submitted!')
    },500)
   
  }
});

//define the validate function

const isValidate = () => {
  const nameVal = name.value.trim();
  const emailVal = email.value.trim();
  const numberVal = number.value.trim();
  const subjectVal = subject.value.trim();
  const messageVal = message.value.trim();

  let isError = false;
  // validate name
  if (nameVal === "") {
    document.getElementById("err-name").innerHTML = "*Name cannot be blank";
    isError = true;
  } else if (nameVal.lenghth <= 2) {
    document.getElementById("err-name").innerHTML =
      "*Name should be min 3 charater";
    isError = true;
  }

  // validate email
  if (emailVal === "") {
    document.getElementById("err-email").innerHTML = "*Email cannot be blank";
    isError = true;
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailVal)) {
    document.getElementById("err-email").innerHTML = "*Email is not valid";
    isError = true;
  }

  // validate number
  if (numberVal === "") {
    document.getElementById("err-num").innerHTML = "*Number cannot be blank";
    isError = true;
  } else if (numberVal.lenghth < 10) {
    document.getElementById("err-num").innerHTML =
      "*Nubmer should be of 10 digit";
    isError = true;
  }

  //validate subject
  if (subjectVal === "") {
    document.getElementById("err-sub").innerHTML = "*Subject cannot be blank";
    isError = true;
  }
  // validate message
  if (messageVal === "") {
    document.getElementById("err-msg").innerHTML = "*Message cannot be blank";
    isError = true;
  }
  return !isError;
};

//Clear inputs after submitting the form
function clearInput() {
  document.querySelectorAll("input, textarea").forEach((m) => {
    m.value = "";
  });
}
