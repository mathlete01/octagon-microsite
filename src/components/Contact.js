import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyForm from "./MyForm.js";

function Contact() {
	return (
		<div className="Contact">
			<Container>
				<Row className="mb-3">
					<h1>Contact Us</h1>
				</Row>
				<Row className="mb-3">
					<MyForm />
				</Row>
			</Container>
		</div>
	);
}

export default Contact;
