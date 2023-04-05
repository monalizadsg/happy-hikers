function validateForm(){
    let name = document.booking.name.value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
  
}