import React, { Component } from "react";
import { Form, Card, Container, Row, Col, Navbar, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imgPath } from "../config";
import Filter from "../components/Filter";
import AdvFilter from "../components/AdvFilter";

import { toggleFilter } from "../redux/actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
    toggleFilter: (isAdvancedFilter) => dispatch(toggleFilter(isAdvancedFilter))
});

const mapStateToProps = (state) => {
    return {
        isAdvancedFilter: state.isAdvancedFilter,
        result: state.coins,
    }
  } 

class ListOfCoins extends Component {

    handleClick = () => {
        this.props.toggleFilter(this.props.isAdvancedFilter);
    }

    render() {
        const {isAdvancedFilter, result} = this.props;
        
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
                    <Form>
                        <Filter />
                        <div className='advanced-filter'
                            onClick={this.handleClick}>
                            <p className='adv-input'>Advanced filter</p>
                            <p className={`adv-input arrow ${isAdvancedFilter ? "hide" : null}`}>∨</p>
                        </div>
                        { isAdvancedFilter ? <AdvFilter /> : 
                        <Row xs={1} md={2} className="g-4">
                        { result.length? result.map((card) => (                           
                      <Col key={card.id}>
                        <Card>
                            <Row>
                            <Col>
                                <Card.Img src={imgPath + card.avers_img.slice(card.avers_img.indexOf('/'))}
                                alt={'coin ' + card.avers_img} style={{ width: '60%' }}  />
                            </Col>
                            <Col>
                                <Card.Body>
                                <Card.Title><Link to="/coin" state={{coin: card}} >{card.coinname}</Link></Card.Title>
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
           </>    
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfCoins);