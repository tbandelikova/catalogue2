import { Card, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";

import Bullion_coins from '../img-category/Bullion_coins.png';
import Exclusive_coins from '../img-category/Exclusive_coins.png';
import Commemorative_coins from '../img-category/Commemorative_coins.png';

export default function CategoryCards() {
    return (
        <Row xs={2} md={3} className="g-3">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Bullion coins</Card.Title>
                        <Link to="/category/2">Show all {'>'}</Link>
                    </Card.Body>
                    <Card.Img variant="bottom" src={Bullion_coins} style={{ width: '72%' }} />
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Exclusive coins</Card.Title>
                        <Link to="/category/3">Show all {'>'}</Link>
                    </Card.Body>
                    <Card.Img variant="bottom" src={Exclusive_coins} style={{ width: '72%' }} />
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Commemorative coins</Card.Title>
                        <Link to="/category/1">Show all {'>'}</Link>
                    </Card.Body>
                    <Card.Img variant="bottom" src={Commemorative_coins} style={{ width: '72%' }} />
                </Card>
            </Col>

        </Row>
    );
}