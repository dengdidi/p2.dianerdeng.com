			function validateLogin(loginForm){

				fail	 =	validateLoginEmail(loginForm.email.value)
				fail	+=	validateLoginPassword(loginForm.password.value)
			
			if (fail == "") return true
					else {
						alert(fail); 
						return false
					}
				
			}				

			/* LOGIN VALIDATION */
			
			function validateLoginEmail(field){
				if (field == "")
					return "No email was entered! \n"
				else if (!(field.indexOf(".") > 0) && (field.indexOf("@") > 0) || /[^a-zA-z0-9.@_-]/.test(field))
					return"The email address is invalid.\n"
				return""
			}

			function validateLoginPassword(field){
				if (field == "")
					return "No password was entered!\n"
				else if (field.length < 4)
					return "Passwords need to be at least 4 characters.\n"
				else if (!/[a-z]/.test(field) || !/[A-Z]/.test(field) || !/[0-9]/.test(field))
					return "Paswords require (1) lowercase letter, (1) uppercase letter, and (1) number.\n"
				return""
			}