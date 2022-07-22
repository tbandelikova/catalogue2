import React, { Component } from "react";
import { Form, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ListOfCoins.css";
import Filter from "../components/Filter";
import AdvFilter from "../components/AdvFilter";
import Paginator from "../components/Paginator";
import Navigation from "../components/Navigation";

import { toggleFilter } from "../redux/actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
    toggleFilter: (isAdvancedFilter) => dispatch(toggleFilter(isAdvancedFilter))
});

const mapStateToProps = (state) => {
    return {
        isAdvancedFilter: state.isAdvancedFilter,
        result: state.coins,
        isLoading: state.isLoading,
    }
}

class ListOfCoins extends Component {
    state = {
        activePage: 1,
        coinsPerPage: 4,
    }

    handleClick = () => {
        this.props.toggleFilter(this.props.isAdvancedFilter);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { isAdvancedFilter, result, isLoading } = this.props;
        const { activePage, coinsPerPage } = this.state;
        const indexOfLastCoin = activePage * coinsPerPage;
        const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
        const activeCoins = result.slice(indexOfFirstCoin, indexOfLastCoin);
        const paginate = (activePage) => this.setState({ activePage: activePage })

        return (
            <>
                <Navigation title="List of the coins" condition="true" />
                <Container>
                    <Form>
                        <Filter />
                        <div className='advanced-filter'
                            onClick={this.handleClick}>
                            <p className='adv-input'>Advanced filter</p>
                            <p className={`adv-input arrow ${isAdvancedFilter ? "hide" : null}`}>∨</p>
                        </div>
                        {isAdvancedFilter ? <AdvFilter /> :
                            <Row xs={1} md={2} className="g-4">

                                {isLoading && <Card.Title>Loading...</Card.Title>}

                                {result.length ? activeCoins.map((card) => (
                                    <Col key={card.id}>
                                        <Card>
                                            <Row>
                                                <Col>
                                                    <Card.Img src={card.avers_img}
                                                        alt={'coin ' + card.avers_img} style={{ width: '50%' }} />
                                                </Col>
                                                <Col>
                                                    <Card.Body>
                                                        <Card.Title><Link to="/coin" state={{ coin: card }} >{card.coinname}</Link></Card.Title>
                                                        <Card.Text>{card.about_info.slice(0, card.about_info.indexOf('.', 20) + 1)}</Card.Text>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                )) : <Card>Nothing found !</Card>}
                            </Row>
                        }
                    </Form>
                </Container>
                <Card.Footer>
                    <Container>
                        <Row>
                            <Col>
                                <Paginator coinsPerPage={coinsPerPage}
                                    allCoins={result.length}
                                    activePage={activePage}
                                    paginate={paginate} />
                            </Col>
                            <Col>
                                <Form.Group className="mb-1">
                                    <Row>
                                        <Col>
                                            <Form.Select className="form-control" name="coinsPerPage"
                                                style={{ width: '5rem', display: 'inline-block' }}
                                                onChange={this.handleChange}>
                                                <option value={4}>4</option>
                                                <option value={6}>6</option>
                                                <option value={8}>8</option>
                                                <option value={10}>10</option>
                                            </Form.Select>
                                            <Form.Label className="main-label"
                                                style={{ marginLeft: '0.5rem' }}>
                                                out of <b>{result.length}</b> coins
                                            </Form.Label>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Container>
                </Card.Footer>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfCoins);