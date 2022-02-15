import React from "react";
import { Card, Col } from "react-bootstrap";

const Article = ({ item }) => {
	return (
		<Col md={6} lg={4} sm={12}>
			<Card className="my-4 center-article">
				<Card.Img variant="top" src={item.Urlimage} />

				<Card.Body>
					<Card.Title>{item.Nombre}</Card.Title>
					<Card.Text>{item.Descripcion}</Card.Text>
					<p className="precio">{`$ ${item.Precio}`} </p>

					{/* <Button variant="primary">Go somewhere</Button> */}
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Article;
