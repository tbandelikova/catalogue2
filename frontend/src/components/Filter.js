import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { filterCoins, listOfCoins, toggleFilter } from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const mapDispatchToProps = dispatch => {
    return {
        filterCoins: filter => dispatch(filterCoins(filter)),
        listOfCoins: coin => dispatch(listOfCoins(coin)),
        toggleFilter: (isAdvancedFilter) => dispatch(toggleFilter(isAdvancedFilter))
    }
};

const mapStateToProps = (state) => {
    return {
        filterParams: state.filterParams,
        isAdvancedFilter: state.isAdvancedFilter
    }
  } 

class Filter extends Component {

    handleChange = (e) => {
        this.props.filterCoins({ [e.target.name]: e.target.value });
    }

    handleClick = () => {  
        const SEARCH_URL = new URL('http://localhost:5000/search');
        const { inputValue, country, metal, quality, fromPrice, toPrice, fromYear, toYear} = this.props.filterParams;
        const params = {
            inputValue: inputValue ? inputValue : '',
            country: country ? country : '',
            composition: metal ? metal : '',
            quality: quality ? quality : '',
            fromPrice: fromPrice ? fromPrice : '',
            toPrice: toPrice ? toPrice : '',
            fromYear: fromYear ? fromYear : '',
            toYear: toYear ? toYear : ''
        }
        SEARCH_URL.search = new URLSearchParams(params).toString();

        fetch(SEARCH_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.props.listOfCoins(data)
        })
        .catch(error => {
        console.log(`Произошла ошибка:
        ${error.message}`);
        });
        // this.props.toggleFilter(this.props.isAdvancedFilter);
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
                    <Button variant="primary" type="button"
                    onClick={this.handleClick}>
                        <Link to="/search">Search</Link>
                    </Button>{' '}
                </Col>
            </Row>   
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);