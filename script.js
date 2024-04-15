function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var postalCode = document.getElementById('postalCode').value;
    var country = document.getElementById('country').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var dob = document.getElementById('dob').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var agree = document.getElementById('agree').checked;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/; 
    var postalCodePattern = /^\d{6}$/; 
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
  
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || address.trim() === '' || postalCode.trim() === '' || country === '' || password.trim() === '' || confirmPassword.trim() === '' || dob.trim() === '' || !agree || !gender) {
      alert('All fields are required and you must agree to the terms and conditions!');
      return false;
    }
  
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address!');
      return false;
    }
  
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid phone number!');
      return false;
    }
  
    if (!postalCodePattern.test(postalCode)) {
      alert('Please enter a valid postal code!');
      return false;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return false;
    }
  
    if (!passwordPattern.test(password)) {
      alert('Password must contain at least one digit, one lowercase letter, one uppercase letter, and at least 8 characters!');
      return false;
    }
  
   
    var dobDate = new Date(dob);
    var currentDate = new Date();
    if (dobDate >= currentDate) {
      alert('Please enter a valid date of birth!');
      return false;
    }
  
   
    var message = "Name: " + name + "\n";
    message += "Email: " + email + "\n";
    message += "Phone: " + phone + "\n";
    message += "Address: " + address + "\n";
    message += "Postal Code: " + postalCode + "\n";
    message += "Country: " + country + "\n";
    message += "Date of Birth: " + dob + "\n";
    message += "Gender: " + gender.value + "\n";
  
    var confirmed = window.confirm("Confirmation\n\n" + message);
    if (confirmed) {
        window.location.href = "sucess.html"; 
    }
    return false;
}
  