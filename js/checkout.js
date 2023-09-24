
// Exercise 7

/*function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value == "" || fName.value.length < 3 || !fName.value.match(/^[a-zA-Z]+$/)) {
		whenValidation(fName, true)
		error++;
	} else {
		whenValidation(fName, false)
	}

	if (fEmail.value == "" || fName.value.length < 3 || !fEmail.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
		whenValidation(fEmail, true)
		error++;
	} else {
		whenValidation(fEmail, false)
	}

	if (fAddress.value == "" || fAddress.value.length < 3) {
		whenValidation(fAddress, true)
		error++;
	} else {
		whenValidation(fAddress, false)
	}

	if (fLastN.value == "" || fLastN.value.length < 3 || !fLastN.value.match(/^[a-zA-Z]+$/)) {
		whenValidation(fLastN, true)
		error++;
	} else {
		whenValidation(fLastN, false)
	}

	if (fPassword.value == "" || fPassword.value.length < 3 || !fPassword.value.match(/^(?=.*[a-zA-Z])(?=.*\d).+$/)) {
		whenValidation(fPassword, true)
		error++;
	} else {
		whenValidation(fPassword, false)
	}

	if (fPhone.value == "" || fPhone.value.length !== 9 || !fPhone.value.match(/^[0-9]+$/g)) {
		whenValidation(fPhone, true)
		error++;
	} else {
		whenValidation(fPhone, false)
	}

	if (error > 0) {
		alert("Error");
		//checkoutForm.addEventListener("submit", (e) => { e.preventDefault(); },);
	} else {
		alert("Form submitted successfully");
	}

}
function whenValidation(element, error) {
	if (error>0) {
		element.classList.add("is-invalid");
	} else {
		element.classList.remove("is-invalid");
		element.classList.add("is-valid");
	}
}
*/



function validate() {
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
  
	// Mostra un missatge d'error si és necessari
	if (hasError) {
	  document.getElementById("error-message").textContent = "Hi ha errors en el formulari. Si us plau, revisa els camps marcats en vermell.";
	} /*else {
	  document.getElementById("form").submit();
	}*/
  }
  
  
