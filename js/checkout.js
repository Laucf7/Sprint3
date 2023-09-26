
// Exercise 7

function validate(e) {
	debugger;
	e.preventDefault();
	
	// // Get the input fields. Obté els valors dels camps del formulari
	var firstName = document.getElementById("fName").value;
	var lastName = document.getElementById("fLastN").value;
	var email = document.getElementById("fEmail").value;
	var address = document.getElementById("fAddress").value;
	var password = document.getElementById("fPassword").value;
	var phone = document.getElementById("fPhone").value;
  
	// Patrons de validació
	var namePattern = /^[a-zA-Z]+$/;
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	var passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z]).{4,8}$/;
	var phonePattern = /^[0-9]{9}$/;
  
	// Inicialitza les variables d'error
	let hasError = false;
  
	// Comprova les condicions per a cada camp
	if (firstName.value === "" || firstName.length < 3 || !namePattern.test(firstName)) {
	  document.getElementById("fName").classList.add("is-invalid");
	  hasError = true;
	} else {
	  document.getElementById("fName").classList.remove("is-invalid");
	}
  
	if (lastName.length < 3 || !namePattern.test(lastName)) {
	  document.getElementById("fLastN").classList.add("is-invalid");
	  hasError = true;
	} else {
	  document.getElementById("fLastN").classList.remove("is-invalid");
	}
  
	if (email.length < 3 || !emailPattern.test(email)) {
	  document.getElementById("fEmail").classList.add("is-invalid");
	  hasError = true;
	} else {
	  document.getElementById("fEmail").classList.remove("is-invalid");
	}
  
	if (address.length < 3) {
	  document.getElementById("fAddress").classList.add("is-invalid");
	  hasError = true;
	} else {
	  document.getElementById("fAddress").classList.remove("is-invalid");
	}
  
	if (!passwordPattern.test(password)) {
	  document.getElementById("fPassword").classList.add("is-invalid");
	  hasError = true;
	} else {
	  document.getElementById("fPassword").classList.remove("is-invalid");
	}
  
	if (!phonePattern.test(phone)) {
	  document.getElementById("fPhone").classList.add("is-invalid");
	  hasError = true;
	} else {
	  document.getElementById("fPhone").classList.remove("is-invalid");
	}

  }
  
  
