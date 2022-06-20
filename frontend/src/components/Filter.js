import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { filterCoins } from "../redux/actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        filterCoins: filter => dispatch(filterCoins(filter))
    }
};

class Filter extends Component {

    handleChange = (e) => {
            this.props.filterCoins({ [e.target.name]: e.target.value });
    }

    render() {
        const {inputValue} = this.props;

        return (
            <Row className="search-block">
                <Col md>
                    <Form.Group className="mb-0" controlId="formText">
                        <Form.Label className="main-label">Input field</Form.Label>
                        <Form.Control className="main-input" type="text" 
                        name='inputValue'
                        value={inputValue}
                        onChange={this.handleChange} />
                    </Form.Group>
                </Col>
                <Col md>
                    <Button variant="primary" type="button">
                        Search
                    </Button>{' '}
                </Col>
            </Row>   
        )
    }

}

export default connect(null, mapDispatchToProps)(Filter);