function validateForm() {
  let name = document.booking.name.value;
  let bday = document.booking.bday.value;
  let email = document.booking.email.value;
  let num = document.booking.phone.value;

  // reset fields on submit
  clearErrorMessage();

  if (name == "") {
    document.getElementById("name").classList.add("error");
    alert("Name must be filled out");
    return false;
  } else if (bday == "") {
    document.getElementById("bday").classList.add("error");
    alert("Birthday must be filled out");
    return false;
  } else if (email == "") {
    document.getElementById("email").classList.add("error");
    alert("Email must be filled out");
    return false;
  } else if (!isValidEmail(email)) {
    document.getElementById("email").classList.add("error");
    alert("Email is invalid. Please enter a valid email.");
    return false;
  } else if (num == "") {
    document.getElementById("phone").classList.add("error");
    alert("Contact number must be filled out");
    return false;
  } else {
    clearErrorMessage;
    alert(
      "Thank you for booking with us! \n\nAn email has been sent to you for payment instruction. \n\nEnjoy on your future hike! Happy Hiking!"
    );
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function clearErrorMessage() {
  document.getElementById("name").classList.remove("error");
  document.getElementById("bday").classList.remove("error");
  document.getElementById("email").classList.remove("error");
  document.getElementById("phone").classList.remove("error");
}

// Add event listener to input fields to remove error class when input is valid
document.getElementById("name").addEventListener("input", function () {
  if (this.value != "") {
    document.getElementById("name").classList.remove("error");
  }
});

document.getElementById("bday").addEventListener("input", function () {
  if (this.checkValidity()) {
    document.getElementById("bday").classList.remove("error");
  }
});

document.getElementById("email").addEventListener("input", function () {
  if (this.checkValidity()) {
    document.getElementById("email").classList.remove("error");
  }
});

document.getElementById("phone").addEventListener("input", function () {
  if (this.checkValidity()) {
    document.getElementById("phone").classList.remove("error");
  }
});
