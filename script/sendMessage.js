function sendMessage() {
    var name = document.getElementById("input_name").value;
    var phone = document.getElementById("input_tel").value;
    var email = document.getElementById("input_email").value;
    var message = document.getElementById("input_message").value;
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "milan.destura620@gmail.com",
        Password: "3D7250B8538677416DE47D366AA6EA19F4F6",
        To: 'milan.destura007@gmail.com',
        From: "milan.destura620@gmail.com",//change this to desired recipient(Happy Hikers Admin email)
        Subject: "Happy Hikers : Mail from contact form",
        Body: "Name:" +name+ "<br/> Email:"+email + "<br/> Phone:" +phone+ "<br/> Message:" + message
      }).then(
        message => alert(message)
      );
      alert("Message Sent.");
       }

    function validate() {
    var name = document.getElementById("input_name").value;
    var phone = document.getElementById("input_tel").value;
    var email = document.getElementById("input_email").value;
    var message = document.getElementById("input_message").value;
    var isValid=true;
  
    if (!name) {
      alert('Name is required');
      return false;
  }
  if (!phone) {
      alert('Phone is required');
      return false;
  }

  if (!email) {
      alert('Email is required');
      return false;
  } else if (!isValidEmail(email)) {
      alert('Email is invalid');
      return false;
  }

  if (!message) {
      alert('Message is required');
      return false;
  }

  return true;
    }
    
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validate1(){
if(validate()){
  sendMessage();
}
}