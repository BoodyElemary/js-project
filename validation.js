let inputName = document.getElementById("name");
let inputMail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let inputCountry = document.getElementById("selectCountry");
let hiddenInputs = document.getElementsByClassName("hidden");
let selectCountry = document.getElementById("selectCountry");
let genderSelect = document.getElementsByName("gender");
let sportsChecked = document.getElementsByName("sports");

//alerts
let validationAlert = document.getElementById("alert");
let nameRequired = document.getElementById("nameRequire");
let mailRequired = document.getElementById("emailRequire");
let passwordRequire = document.getElementById("passwordRequire");
let passwordlength = document.getElementById("passwordLength");
let invalidMail = document.getElementById("invalidMail");
let btnSubmit = document.getElementById("submit-btn");
let invalidCountry = document.getElementById("countrySelect");
let invalidGender = document.getElementById("genderSelect");
let invalidSport = document.getElementById("sportSelect");
inputName.addEventListener("focus", function () {
  if (inputName.value == "") {
    validationAlert.classList.remove("hidden");
    nameRequired.classList.remove("hidden");
  }
});

// alert check

function alertCheck() {
  let arrayHidden = [];
  for (let i = 0; i < hiddenInputs.length; i++) {
    arrayHidden.push(hiddenInputs[i].classList.value);
  }
  console.log(arrayHidden);
  if (arrayHidden.length >= 5) {
    validationAlert.classList.add("hidden");
  }
}

inputName.addEventListener("input", function () {
  if (inputName.value.length > 0) {
    nameRequired.classList.add("hidden");
  }
  alertCheck();
});

inputMail.addEventListener("focus", function () {
  if (inputMail.value === "") {
    validationAlert.classList.remove("hidden");
    mailRequired.classList.remove("hidden");
  }
});

inputMail.addEventListener("input", function () {
  if (
    inputMail.value.length > 0 &&
    /[a-z]{3}@[a-z]{3}.com/.test(inputMail.value) == false
  ) {
    mailRequired.classList.add("hidden");
    invalidMail.classList.remove("hidden");
  } else {
    invalidMail.classList.add("hidden");
  }
  alertCheck();
});

let checkedArr = [];

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (selectCountry.selectedIndex == 0) {
    // alert("please choose a country");
    validationAlert.classList.remove("hidden");
    invalidCountry.classList.remove("hidden");
  } else {
    invalidCountry.classList.add("hidden");
  }
  if (selectCountry.selectedIndex == 0) {
    validationAlert.classList.remove("hidden");
    invalidCountry.classList.remove("hidden");
  } else {
    invalidCountry.classList.add("hidden");
  }

  if (genderSelect[0].checked == false && genderSelect[1].checked == false) {
    validationAlert.classList.remove("hidden");
    invalidGender.classList.remove("hidden");
  } else {
    invalidGender.classList.add("hidden");
  }

  if (inputMail.value === "") {
    validationAlert.classList.remove("hidden");
    mailRequired.classList.remove("hidden");
  } else {
    mailRequired.classList.add("hidden");
  }

  if (inputName.value === "") {
    validationAlert.classList.remove("hidden");
    nameRequired.classList.remove("hidden");
  } else {
    nameRequired.classList.add("hidden");
  }

  if (inputPassword.value === "") {
    validationAlert.classList.remove("hidden");
    passwordRequire.classList.remove("hidden");
  }
  if (inputPassword.value.length > 0 && inputPassword.value.length < 8) {
    passwordRequire.classList.add("hidden");
    passwordlength.classList.remove("hidden");
  } else {
    passwordlength.classList.add("hidden");
  }
  for (let i = 0; i < sportsChecked.length; i++) {
    if (sportsChecked[i].checked) {
      checkedArr.push(sportsChecked[i]);
    }
  }
  if (checkedArr.length < 2) {
    invalidSport.classList.remove("hidden");
  } else {
    invalidSport.classList.add("hidden");
  }

  alertCheck();
});
