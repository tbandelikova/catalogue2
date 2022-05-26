import "./Homepage.css";
import React, { Component } from "react";
import { Card, Container, Row, Col, Navbar, Form, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

import Bullion_coins from '../img/Bullion_coins.png';
import Exclusive_coins from '../img/Exclusive_coins.png';
import Commemorative_coins from '../img/Commemorative_coins.png';

class Homepage extends Component {
    state = {
        isAdvancedFilter: false,
        mainValue: '',
        country: '',
        metal: '',
        quality: '',
        fromPrice: '',
        toPrice: '',
        fromYear: '',
        toYear: ''
    }

    handleChange = (e) => {
        if (this.state.isAdvancedFilter) {
            this.setState((previousState) => ({
                ...previousState,
                [e.target.name]: e.target.value,
            }))
        } else {
            this.setState({ mainValue: e.target.value });
        }
        console.log(this.state)
    }

    handleClick = () => {
        this.setState((previousState) => ({ isAdvancedFilter: !previousState.isAdvancedFilter }));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        ///
        this.setState({ mainValue: '' });
    };

    render() {
        const {mainValue, fromPrice, toPrice, fromYear, toYear} = this.state;
        return (
            <>
                <Navbar>
                    <Container>
                        <Navbar.Brand className="display-4">Homepage</Navbar.Brand>
                    </Container>
                </Navbar>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col md>
                                <Form.Group className="mb-0" controlId="formText">
                                    <Form.Label className="main-label">Input field</Form.Label>
                                    <Form.Control className="main-input" type="text" 
                                    name='mainValue'
                                    value={mainValue}
                                    onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Button variant="primary" type="submit">
                                    Search
                                </Button>{' '}
                            </Col>

                        </Row>
                        <div className='advanced-filter'
                            onClick={this.handleClick}>
                            <p className='adv-input'>Advanced filter</p>
                            <p className={`adv-input arrow ${this.state.isAdvancedFilter ? "hide" : null}`}>∨</p>
                        </div>

                        {this.state.isAdvancedFilter ? 
                        <Row>
                            <Col md>
                                <Form.Group className="mb-2" controlId="formCountry">
                                    <Form.Label className="main-label">Issuing country</Form.Label>
                                    <Form.Select className="form-control" name="country" onChange={this.handleChange}>
                                        <option value="Australia">Australia</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="British%South%Africa">British South Africa</option>
                                        <option value="British%Virgin%Islands">British Virgin Islands</option>
                                        <option value="Canada">Canada</option>
                                        <option value="China">China</option>
                                        <option value="Costa%Rica">Costa Rica</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="France">France</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="the%Belgian%Congo">the Belgian Congo</option>
                                        <option value="the%Republic%of%Vietnam">the Republic of Vietnam</option>
                                        <option value="the%Weimar%Republic">the Weimar Republic</option>
                                        <option value="UNITED%STATES%OF%AMERICA">UNITED STATES OF AMERICA</option>
                                        <option value="Yemen">Yemen</option>
                                        </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formMetal">
                                    <Form.Label className="main-label">Metal</Form.Label>
                                    <Form.Select className="form-control" name="metal" onChange={this.handleChange}>
                                        <option value="Gold">Gold</option>
                                        <option value="Nickel">Nickel</option>
                                        <option value="Silver">Silver</option>
                                        <option value="Steel">Steel</option>
                                        </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formQuality">
                                    <Form.Label className="main-label">Quality of the coin</Form.Label>
                                    <Form.Select className="form-control" name="quality" onChange={this.handleChange}>
                                        <option value="BU">Brilliant Uncirculated</option>
                                        <option value="Proof">Proof</option>
                                        <option value="Bullion">Bullion</option>
                                        </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group className="mb-4" controlId="formPrice">
                                    <Form.Label className="main-label">Price</Form.Label>
                                    <Row>
                                        <Form.Label column sm={1}>from</Form.Label>
                                        <Col sm={4}>
                                        <Form.Control className="main-input" type="number"
                                            name="fromPrice"
                                            value={fromPrice} onChange={this.handleChange} />
                                        </Col>
                                        <Form.Label column sm={1}>to</Form.Label>
                                        <Col sm={4}>
                                        <Form.Control className="main-input" type="number"
                                            name="toPrice"
                                            value={toPrice} onChange={this.handleChange} />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formYear">
                                    <Form.Label className="main-label">Year of issue</Form.Label>
                                    <Row>
                                        <Form.Label column sm={1}>from</Form.Label>
                                        <Col sm={4}>
                                        <Form.Control className="main-input" type="number"
                                            name="fromYear"
                                            value={fromYear} onChange={this.handleChange} />
                                        </Col>
                                        <Form.Label column sm={1}>to</Form.Label>
                                        <Col sm={4}>
                                        <Form.Control className="main-input" type="number"
                                            name="toYear"
                                            value={toYear} onChange={this.handleChange} />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                
                            </Col>
                        </Row> :
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
                        }

                    </Form>
                </Container>
            </>

        )
    }
}

export default Homepage;