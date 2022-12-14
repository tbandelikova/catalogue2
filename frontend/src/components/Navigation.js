import React from "react";
import { Navbar, Col, Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Navigation({ title, condition }) {

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Col>
                    <Navbar.Brand className="display-4">{title}</Navbar.Brand>
                    { condition === "true" ?
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/">Homepage</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>List of the coins</Breadcrumb.Item>
                    </Breadcrumb>
                        : null}
                </Col>
            </Container>
        </Navbar>
    )
}