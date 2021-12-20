const validate = (inputs) => {
	console.log(`inputs = `, inputs);
	// Email errors
	const errors = {};
	if (!inputs.email) {
		errors.email = "Check Email";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)) {
		errors.email = "Invalid email address";
	}

	// First Name Errors
	if (!inputs.firstName) {
		errors.firstName = "Check First Name";
	} else if (!/^[a-zA-Z]*$/g.test(inputs.firstName)) {
		errors.firstName = "Invalid first name";
	}

	// Last Name Errors
	if (!inputs.lastName) {
		errors.lastName = "Check Last Name";
	} else if (!/^[a-zA-Z](?:[ '\-a-zA-Z]*[a-zA-Z])?$/i.test(inputs.lastName)) {
		errors.lastName = "Invalid last name";
	}

	// Zipcode Errors
	if (!inputs.zipcode) {
		errors.zipcode = "Check Zipcode";
	} else if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(inputs.zipcode)) {
		errors.zipcode = "Invalid zipcode";
	}

	// State Errors
	// if (!inputs.stateabb) {
	// 	errors.stateabb = "Check State";
	// }

	return errors;
};

export default validate;
