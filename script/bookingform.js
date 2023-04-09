function validateForm() {

  let name = document.booking.name.value;
  let bday = document.booking.bday.value;
  let email = document.booking.email.value;
  let num = document.booking.phone.value;



  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  else if (bday == "") {
    alert("Birthday must be filled out");
    return false;
  }

  else if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  else if (num == "") {
    alert("Contact number must be filled out");
    return false;
  }
  else {
    alert("Thank you for booking with us! \n\nAn email has been sent to you for payment instruction. \n\nEnjoy on your future hike! Happy Hiking!")
  }
}


function updateDest(dest) {
  document.booking.destination.value = dest;
  
}