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
				</Form.Group>
				{errors.firstName && <p>errors.firstName</p>}
				<Form.Group as={Col}>
					<Form.Label>Last Name</Form.Label>
					<Form.Control placeholder="Jobs" />
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
				</Form.Group>
			</Row>
			{errors.email && <p>errors.email</p>}
			<Row className="mb-3">
				<Form.Group as={Col}>
					<Form.Label>Zipcode</Form.Label>
					<Form.Control type="email" placeholder="95014" />
				</Form.Group>

				<Form.Group as={Col}>
					<Form.Label>State</Form.Label>
					<Form.Select defaultValue="Choose...">
						<option>Choose...</option>
						<option>...</option>
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
