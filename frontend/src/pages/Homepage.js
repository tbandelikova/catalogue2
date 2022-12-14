import "./Homepage.css";
import React, { Component } from "react";
import { Container, Form} from "react-bootstrap";
import CategoryCards from "../components/CategoryCards";
import Filter from "../components/Filter";
import AdvFilter from "../components/AdvFilter";
import Navigation from "../components/Navigation";

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

    render() {
        const {isAdvancedFilter} = this.props;
        return (
            <>
                <Navigation title="Homepage" condition="false" />
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