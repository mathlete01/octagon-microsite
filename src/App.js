import "./App.css";
import logo from "./assets/noun-octagon-1657004.svg";
import hero from "./assets/Stocksy_comp_3976971.jpeg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Main from "./components/Main.js";

function App() {
	return (
		<div className="App">
			<Navbar bg="light" variant="light">
				<Container>
					<Navbar.Brand href="#home">
						<img
							width="30"
							height="30"
							className="logo"
							src={logo}
							alt="Octagon"
						/>
						<logo></logo>
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/home">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/contact">
							Contact
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<Main />
		</div>
	);
}

export default App;
