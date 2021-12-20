import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useForm from "../customHooks";
import validate from "../validate";

const MyForm = () => {
	const { inputs, handleInputChange, handleSubmit, errors } = useForm(
		{
			email: "",
			firstName: "",
			lastName: "",
			zipcode: "",
			stateabb: "",
		},
		validate
	);
	return (
		<Form onSubmit={handleSubmit}>
			<Row className="mb-3">
				<Form.Group as={Col}>
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="text"
						name="firstName"
						placeholder="Steve"
						onChange={handleInputChange}
						value={inputs.firstName}
						required
					/>
					<p className="errors">{errors.firstName}</p>
				</Form.Group>

				<Form.Group as={Col}>
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="text"
						name="lastName"
						placeholder="Jobs"
						onChange={handleInputChange}
						value={inputs.lastName}
						required
					/>
					<p className="errors">{errors.lastname}</p>
				</Form.Group>
			</Row>
			<Row className="mb-3">
				<Form.Group as={Col}>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						name="email"
						onChange={handleInputChange}
						value={inputs.email}
						placeholder="steve@apple.com"
						required
					/>
					<p className="errors">{errors.email}</p>
				</Form.Group>
			</Row>
			<Row className="mb-3">
				<Form.Group as={Col}>
					<Form.Label>Zipcode</Form.Label>
					<Form.Control
						type="text"
						name="zipcode"
						onChange={handleInputChange}
						value={inputs.zipcode}
						placeholder="95014"
						required
					/>
					<p className="errors">{errors.zipcode}</p>
				</Form.Group>
				<Form.Group as={Col}>
					<Form.Label>State</Form.Label>
					<Form.Select defaultValue="Choose...">
						<option>Choose...</option>
						<option value="AL">AL</option>
						<option value="AK">AK</option>
						<option value="AR">AR</option>
						<option value="AZ">AZ</option>
						<option value="CA">CA</option>
						<option value="CO">CO</option>
						<option value="CT">CT</option>
						<option value="DC">DC</option>
						<option value="DE">DE</option>
						<option value="FL">FL</option>
						<option value="GA">GA</option>
						<option value="HI">HI</option>
						<option value="IA">IA</option>
						<option value="ID">ID</option>
						<option value="IL">IL</option>
						<option value="IN">IN</option>
						<option value="KS">KS</option>
						<option value="KY">KY</option>
						<option value="LA">LA</option>
						<option value="MA">MA</option>
						<option value="MD">MD</option>
						<option value="ME">ME</option>
						<option value="MI">MI</option>
						<option value="MN">MN</option>
						<option value="MO">MO</option>
						<option value="MS">MS</option>
						<option value="MT">MT</option>
						<option value="NC">NC</option>
						<option value="NE">NE</option>
						<option value="NH">NH</option>
						<option value="NJ">NJ</option>
						<option value="NM">NM</option>
						<option value="NV">NV</option>
						<option value="NY">NY</option>
						<option value="ND">ND</option>
						<option value="OH">OH</option>
						<option value="OK">OK</option>
						<option value="OR">OR</option>
						<option value="PA">PA</option>
						<option value="RI">RI</option>
						<option value="SC">SC</option>
						<option value="SD">SD</option>
						<option value="TN">TN</option>
						<option value="TX">TX</option>
						<option value="UT">UT</option>
						<option value="VT">VT</option>
						<option value="VA">VA</option>
						<option value="WA">WA</option>
						<option value="WI">WI</option>
						<option value="WV">WV</option>
						<option value="WY">WY</option>
					</Form.Select>
				</Form.Group>
			</Row>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default MyForm;
