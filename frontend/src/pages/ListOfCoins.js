import React, { Component } from "react";
import { Form, Button, Card, Container, Row, Col, Navbar, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
// const imgPath = 'C:/Users/Tanya/Desktop/Algoritmika/Project_M5/catalogue2/frontend/src/';

class ListOfCoins extends Component {
    state = {
        isAdvancedFilter: false,
        mainValue: '',
        country: '',
        metal: '',
        quality: '',
        fromPrice: '',
        toPrice: '',
        fromYear: '',
        toYear: '',
        result: []
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
        
        ///
        this.setState({ mainValue: '' });
    };

    componentDidMount() {
        fetch(`http://localhost:5000/category/` + `${2}`)
            .then(response => response.json())
            .then(data => {
            console.log(data);
            this.setState({result: data})
            })
            .catch(error => {
            console.log(`Произошла ошибка:
            ${error.message}`);
            });
    }

    render() {
        const {mainValue, fromPrice, toPrice, fromYear, toYear, result} = this.state;
        
        return (
            <>
                <Navbar>
                    <Container>
                        <Navbar.Brand className="display-4">List of the coins</Navbar.Brand>
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link to="/">Homepage</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>List of the coins</Breadcrumb.Item>
                        </Breadcrumb>
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
                                <Button type="submit">
                                    Search
                                </Button>
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
                                        <option value="British South Africa">British South Africa</option>
                                        <option value="British Virgin Islands">British Virgin Islands</option>
                                        <option value="Canada">Canada</option>
                                        <option value="China">China</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="France">France</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="the Belgian Congo">the Belgian Congo</option>
                                        <option value="the Republic of Vietnam">the Republic of Vietnam</option>
                                        <option value="the Weimar Republic">the Weimar Republic</option>
                                        <option value="UNITED STATES OF AMERICA">UNITED STATES OF AMERICA</option>
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
                        <Row xs={1} md={2} className="g-4">
                            {result.map((card, idx) => (                           
                          <Col key={idx}>
                            <Card>
                                <Col>
                                {/* src={require(imgPath + card.avers_img).default} */}
                                    <Card.Img src="img" />
                                </Col>
                                <Col>
                                    <Card.Body>
                                    <Card.Title>{card.coinname}</Card.Title>
                                    <Card.Text>{card.about_info}</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                        }
                    </Form>
                </Container>
           </>    
        )
    }
}

export default ListOfCoins;