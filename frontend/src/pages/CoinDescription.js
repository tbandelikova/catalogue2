import React from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Table, Container} from 'react-bootstrap';

export default function CoinDescription() {
    const location = useLocation()
    const { coin } = location.state;

        return (
            <Container>
                <Row className="justify-content-md-center">
                <Col lg md='5'>
                <Card>
                    <Card.Img variant="top" src={coin.avers_img}
                        alt="https://via.placeholder.com/100" style={{ width: '50%' }} />
                    <br></br>
                    <Card.Img variant="bottom" src={coin.revers_img}
                        alt="https://via.placeholder.com/100" style={{ width: '50%' }} />
                </Card>
                </Col>
                <Col lg md='5'>
                <Card bg="light">
                    <Card.Body>
                        <Card.Title>{coin.coinname}</Card.Title>
                        <Card.Text>{coin.about_info}</Card.Text>
                    </Card.Body>
                    <Table striped bordered hover size="sm">
                        <tbody>
                            <tr>
                            <td>Issuing Country</td>
                            <td>{coin.country}</td>
                            </tr>
                            <tr>
                            <td>Composition</td>
                            <td>{coin.composition}</td>
                            </tr>
                            <tr>
                            <td>Quality</td>
                            <td>{coin.quality}</td>
                            </tr>
                            <tr>
                            <td>Denomination</td>
                            <td>{coin.denomination}</td>
                            </tr>
                            <tr>
                            <td>Year</td>
                            <td>{coin.year_of_issue}</td>
                            </tr>
                            <tr>
                            <td>Weight</td>
                            <td>{coin.weight} g</td>
                            </tr>
                            <tr>
                            <td>Price</td>
                            <td>{coin.price}$</td>
                            </tr>
                        </tbody>
                        </Table>
                    <Link to="/list">Back to the list</Link>
                </Card>
                </Col>
                </Row>
            </Container>
        )
}