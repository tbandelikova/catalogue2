import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listOfCoins } from "../redux/actions";
import { connect } from "react-redux";

import Bullion_coins from '../img-category/Bullion_coins.png';
import Exclusive_coins from '../img-category/Exclusive_coins.png';
import Commemorative_coins from '../img-category/Commemorative_coins.png';

function CategoryCards(props) {

    async function getCategory(id) {
        const response  = await fetch(`http://localhost:5000/category/${id}`);
        if (!response.ok) {
            console.error(`Произошла ошибка: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        
        props.listOfCoins(data);

        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        //     listOfCoins(data)
        // })
        // .catch(error => {
        //     console.log(`Произошла ошибка:
        //                             ${error.message}`);
        // });

    }


    return (
        <Row xs={2} md={3} className="g-3">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Bullion coins</Card.Title>
                        <Link to="/category/2" onClick={getCategory(2)}>Show all {'>'}</Link>
                    </Card.Body>
                    <Card.Img variant="bottom" src={Bullion_coins} style={{ width: '72%' }} />
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Exclusive coins</Card.Title>
                        <Link to="/category/3" onClick={getCategory(3)}>Show all {'>'}</Link>
                    </Card.Body>
                    <Card.Img variant="bottom" src={Exclusive_coins} style={{ width: '72%' }} />
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Commemorative coins</Card.Title>
                        <Link to="/category/1" onClick={getCategory(1)}>Show all {'>'}</Link>
                    </Card.Body>
                    <Card.Img variant="bottom" src={Commemorative_coins} style={{ width: '72%' }} />
                </Card>
            </Col>

        </Row>
    );
}

const mapDispatchToProps = dispatch => ({
    listOfCoins: coin => dispatch(listOfCoins(coin))
});

export default connect(null, mapDispatchToProps)(CategoryCards);