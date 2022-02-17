import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Stock from "./stock";
import Cuidado from "./cpp";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	Row,
	Container,
	Form,
	FormControl,
	Button,
	Navbar,
	Nav,
} from "react-bootstrap";

function App() {
	let eliminarDiacriticosEs = (texto) => {
		let text = texto
			.normalize("NFD")
			.replace(
				/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
				"$1"
			)
			.normalize();

		return text;
	};

	const search = (e) => {
		setword(eliminarDiacriticosEs(e.target.value));
	};

	const [word, setword] = useState("");

	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				variant="dark"
				sticky="top"
				className="color-nav"
			>
				<Navbar.Brand href="#home">Playeras & Más </Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link>
							<Link to="/stock">Mecanico</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/cpp">Cuidado con el Perro</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="https://www.mecanicojeans.mx/">Tienda</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>

				<Form inline>
					<FormControl
						type="text"
						placeholder="Búsqueda"
						className="mr-sm-2"
						onChange={search}
					/>
					<Button variant="outline-info">Buscar</Button>
				</Form>
			</Navbar>
			<Container>
				<Row></Row>
			</Container>
			<Routes>
				<Route path="/stock" element={<Stock />} />
				<Route path="/cpp" element={<Cuidado />} />
			</Routes>
			;
		</>
	);
}

export default App;
