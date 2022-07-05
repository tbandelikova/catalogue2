import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listOfCoins, loadingStatus } from "../redux/actions";
import { connect } from "react-redux";

import Bullion_coins from '../img-category/Bullion_coins.png';
import Exclusive_coins from '../img-category/Exclusive_coins.png';
import Commemorative_coins from '../img-category/Commemorative_coins.png';

const mapDispatchToProps = (dispatch) => {
    return {
        listOfCoins: coin => dispatch(listOfCoins(coin)),
        loadingStatus: (isLoading) => dispatch(loadingStatus(isLoading)),
    }
};

class CategoryCards extends Component {

    handleClick = (id) => {
        this.props.loadingStatus(true);

        fetch(`http://localhost:5000/category/${id}`)
        .then(response => response.json())
        .then(data => {
            this.props.listOfCoins(data)
        })
        .catch(error => {
        console.log(`Произошла ошибка:
        ${error.message}`);
        });

        this.props.loadingStatus(false);
    }

render() {
    return (
        <Row xs={2} md={3} className="g-3">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Bullion coins</Card.Title>
                        <Link to="/category/2" role="button" onClick={()=>{this.handleClick(2)}}>Show all {'>'}</Link>
                    </Card.Body>
                    <Card.Img variant="bottom" src={Bullion_coins} style={{ width: '72%' }} />
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Exclusive coins</Card.Title>
                        <Link to="/category/3" role="button" onClick={()=>{this.handleClick(3)}}>Show all {'>'}</Link>
                    </Card.Body>
                    <Card.Img variant="bottom" src={Exclusive_coins} style={{ width: '72%' }} />
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Commemorative coins</Card.Title>
                        <Link to="/category/1" role="button" onClick={()=>{this.handleClick(1)}}>Show all {'>'}</Link>
                    </Card.Body>
                    <Card.Img variant="bottom" src={Commemorative_coins} style={{ width: '72%' }} />
                </Card>
            </Col>

        </Row>
    );
}    
}

export default connect(null, mapDispatchToProps)(CategoryCards);