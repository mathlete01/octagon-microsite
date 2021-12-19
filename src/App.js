import "./App.css";
import logo from "./assets/noun-octagon-1657004.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
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
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">
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
