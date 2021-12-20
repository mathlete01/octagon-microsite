const validate = (inputs) => {
	//Email errors
	const errors = {};
	if (!inputs.email) {
		errors.email = "Check Email";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)) {
		errors.email = "Invalid email address";
	}

	//Name Errors
	if (!inputs.firstName) {
		errors.firstName = "Check First Name";
	} else if (!/^[a-zA-Z]*$/g.test(inputs.firstName)) {
		errors.firstName = "Invalid first name";
	}

	return errors;
};

export default validate;
