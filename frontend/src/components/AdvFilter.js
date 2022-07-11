import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { filterCoins } from "../redux/actions";
import { connect } from "react-redux";
import { countries } from "../config";

const mapDispatchToProps = dispatch => {
    return {
        filterCoins: filter => dispatch(filterCoins(filter))
    }
};

const mapStateToProps = (state) => {
    return {
        filterParams: state.filterParams,
    }
}

class AdvFilter extends Component {
    handleChange = (e) => {
        this.props.filterCoins({ [e.target.name]: e.target.value });
    }

    render() {
        const { country, metal, quality, fromPrice, toPrice, fromYear, toYear } = this.props.filterParams;

        return (

            <Row>
                <Col md>
                    <Form.Group className="mb-2" controlId="formCountry">
                        <Form.Label className="main-label">Issuing country</Form.Label>
                        <Form.Select className="form-control" name="country" onChange={this.handleChange}
                            defaultValue={country}>
                            <option value="">----All----</option>
                            {countries.map((country, i) => (

                                <option key={i} value={country}>{country}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formMetal">
                        <Form.Label className="main-label">Metal</Form.Label>
                        <Form.Select className="form-control" name="metal" onChange={this.handleChange}
                            defaultValue={metal}>
                            <option value="">----All----</option>
                            <option value="Gold">Gold</option>
                            <option value="Nickel">Nickel</option>
                            <option value="Silver">Silver</option>
                            <option value="Steel">Steel</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formQuality">
                        <Form.Label className="main-label">Quality of the coin</Form.Label>
                        <Form.Select className="form-control" name="quality" onChange={this.handleChange}
                            defaultValue={quality}>
                            <option value="">----All----</option>
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
            </Row>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AdvFilter);