import React, { useState } from "react";

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

import Article from "./Component/Articles/Article";
import bdArticulos from "./articulos.json";

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
				bg="dark"
				variant="dark"
				sticky="top"
			>
				<Navbar.Brand href="#home">Playeras & Más</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Inventario</Nav.Link>
						<Nav.Link href="https://www.mecanicojeans.mx/">Tienda</Nav.Link>
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
				<Row>
					{word != ""
						? bdArticulos
								.filter((el) =>
									el.Nombre.normalize("NFD")
										.replace(
											/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
											"$1"
										)
										.normalize()
										.toLowerCase()
										.includes(word.toLowerCase())
								)
								.map((el, i) => {
									return <Article key={i} item={el} />;
								})
						: bdArticulos
								.sort(function (a, b) {
									if (a.Nombre < b.Nombre) return -1;
									if (a.Nombre > b.Nombre) return 1;
									return 0;
								})
								.map((el, i) => {
									return <Article key={i} item={el} />;
								})}
				</Row>
			</Container>
		</>
	);
}

export default App;
