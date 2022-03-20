import { Routes, Route } from "react-router-dom";
import Stock from "./stock";
import Cuidado from "./cpp";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container } from "react-bootstrap";

function App() {
	return (
		<>
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
