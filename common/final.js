function validateForm() {
			var fname = document.getElementById("fname").value;
			var email = document.getElementById("email").value;
			var phone = document.getElementById("phone").value;
			var emailFormat = /[a-z0-9]+\@[a-z0-9]+\.[a-z]{2,4}/i;
			var phoneFormat = /[0-9]{3}-[0-9]{3}-[0-9]{4}/i;
			
			if(phone.length <1 && email.length <1){
			alert("Please enter a way to contact you")
			return false;
			}
			else
				if (phone.length >0){
					if(phone.match(phoneFormat)){
					alert("Thanks " + fname  + ", we'll call you as soon as possible at: " + phone)
					return true;
					}
					else{
					alert("Please check your phone number format")
					return false;
					}
				}
					
				if (email.length >0){
					if(email.match(emailFormat)){
					alert("Thanks " + fname  + ", we'll email you as soon as possible at: " + email)
					return true;
					}
					else{
					alert("Please check your email format")
					return false;
					}
				}
}