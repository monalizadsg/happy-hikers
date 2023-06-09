function sendMessage() {
  let name = document.getElementById("input_name").value;
  let phone = document.getElementById("input_tel").value;
  let email = document.getElementById("input_email").value;
  let message = document.getElementById("input_message").value;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "milan.destura620@gmail.com",
    Password: "3D7250B8538677416DE47D366AA6EA19F4F6",
    To: 'arveerflores@gmail.com', //change this to desired recipient(Happy Hikers Admin email)
    From: "milan.destura620@gmail.com",
    Subject: "Happy Hikers : Mail from contact form",
    Body:
      "Name:" +
      name +
      "<br/> Email:" +
      email +
      "<br/> Phone:" +
      phone +
      "<br/> Message:" +
      message,
  }).then((message) => alert(message));
  alert("Message Sent.");
}

function validate() {
  let name = document.getElementById("input_name").value;
  let phone = document.getElementById("input_tel").value;
  let email = document.getElementById("input_email").value;
  let message = document.getElementById("input_message").value;

  // reset fields on submit
  clearErrorMessage();

  if (!name) {
    alert("Name is required");
    document.getElementById("input_name").classList.add("error");
    return false;
  }

  if (!email) {
    alert("Email is required");
    document.getElementById("input_email").classList.add("error");
    return false;
  } else if (!isValidEmail(email)) {
    alert("Email is invalid");
    document.getElementById("input_email").classList.add("error");
    return false;
  }

  if (!phone) {
    alert("Phone is required");
    document.getElementById("input_tel").classList.add("error");
    return false;
  } else if (!validatePhoneNumber(phone)) {
    alert("Phone number is invalid");
    document.getElementById("input_tel").classList.add("error");
    return false;
  }

  if (!message) {
    alert("Message is required");
    document.getElementById("input_message").classList.add("error");
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\+?\d{3}\d{3}\d{4}$/; // regular expression for format XXX-XXX-XXXX
  return phoneRegex.test(phoneNumber);
}

function clearErrorMessage() {
  document.getElementById("input_name").classList.remove("error");
  document.getElementById("input_email").classList.remove("error");
  document.getElementById("input_tel").classList.remove("error");
  document.getElementById("input_message").classList.remove("error");
}

function validateForm(e) {
  if (e) e.preventDefault(); // prevent form submission to avoid page refresh every click on submit
  const isValid = validate();
  if (isValid) {
    sendMessage();
  }
}
