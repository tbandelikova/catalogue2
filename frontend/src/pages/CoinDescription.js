import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Card, Row, Col, Table, Container} from 'react-bootstrap';

class Description extends Component {

componentDidMount() {
    // const {coin} = this.props.location;
    // {console.log(coin)}
}

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                <Col lg md='5'>
                <Card className="justify-content-md-center">                                
                    <Card.Img variant="top" src="https://via.placeholder.com/100" />
                    <Card.Img variant="bottom" src="https://via.placeholder.com/100" />
                </Card>
                </Col>
                <Col lg md='5'>
                <Card bg="light">                  
                    <Card.Body>
                    {console.log(this.props)}
                        <Card.Title>Canadian Beaver</Card.Title>
                        <Card.Text>
                        "Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.
                        </Card.Text>
                        <Card.Text>
                        In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.
                        In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription "5 cents" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.
                        </Card.Text>
                    </Card.Body>
                    <Table striped bordered hover size="sm">
                        <tbody>
                            <tr>
                            <td>Issuing Country</td>
                            <td>CANADA</td>
                            </tr>
                            <tr>
                            <td>Composition</td>
                            <td>Nickel</td>
                            </tr>
                            <tr>
                            <td>Denomination</td>
                            <td>5 cents</td>
                            </tr>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            </tr>
                            <tr>
                            <td>Year</td>
                            <td>1965</td>
                            </tr>
                            <tr>
                            <td>Weight</td>
                            <td>4.54 g</td>
                            </tr>
                            <tr>
                            <td>Price</td>
                            <td>40$</td>
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
}

export default Description;