import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useForm from "../customHooks";

const MyForm = () => {
	const { inputs, handleInputChange, handleSubmit, errors } = useForm({
		email: "",
	});
	return (
		<Form onSubmit={handleSubmit}>
			<Row className="mb-3">
				<Form.Group as={Col} controlId="formGridPassword">
					<Form.Label>First Name</Form.Label>
					<Form.Control placeholder="Steve" />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridEmail">
					<Form.Label>Last Name</Form.Label>
					<Form.Control placeholder="Jobs" />
				</Form.Group>
			</Row>
			<Row className="mb-3">
				<Form.Group as={Col} controlId="formGridEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						name="email"
						onChange={handleInputChange}
						value={inputs.email}
						required
					/>
				</Form.Group>
			</Row>
			{errors.email && <p>errors.email</p>}
			<Row className="mb-3">
				<Form.Group as={Col} controlId="formGridZip">
					<Form.Label>Zipcode</Form.Label>
					<Form.Control type="email" placeholder="95014" />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridState">
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
