import "./Homepage.css";
import React, { Component } from "react";
import { Container, Navbar, Form} from "react-bootstrap";
import CategoryCards from "../components/CategoryCards";
import Filter from "../components/Filter";
import AdvFilter from "../components/AdvFilter";

import { toggleFilter } from "../redux/actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
    toggleFilter: (isAdvancedFilter) => dispatch(toggleFilter(isAdvancedFilter))
});

const mapStateToProps = (state) => {
    return {
        isAdvancedFilter: state.isAdvancedFilter
    }
  } 

class Homepage extends Component {

    handleClick = () => {
        this.props.toggleFilter(this.props.isAdvancedFilter);
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const SEARCH_URL = new URL('http://localhost:5000/search');
    //     const { inputValue, country, metal, quality, fromPrice, toPrice, fromYear, toYear} = this.state;
    //     const params = {
    //         inputValue: inputValue,
    //         country: country,
    //         composition: metal,
    //         quality: quality,
    //         fromPrice: fromPrice,
    //         toPrice: toPrice,
    //         fromYear: fromYear,
    //         toYear: toYear
    //     }
    //     SEARCH_URL.search = new URLSearchParams(params).toString();

    //     fetch(SEARCH_URL)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     store.dispatch(filterCoins(data))
    //     })
    //     .catch(error => {
    //     console.log(`Произошла ошибка:
    //     ${error.message}`);
    //     });
    //     // this.setState({ inputValue: '' }, {isAdvancedFilter: false});
    // };

    render() {
        const {isAdvancedFilter} = this.props;
        return (
            <>
                <Navbar>
                    <Container>
                        <Navbar.Brand className="display-4">Homepage</Navbar.Brand>
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

                        { isAdvancedFilter ? <AdvFilter /> : <CategoryCards /> }

                    </Form>
                </Container>
            </>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);