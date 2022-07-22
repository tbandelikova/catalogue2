import React, { useState } from "react";
import { Navbar, Col, Breadcrumb, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCart, BsPersonCircle } from "react-icons/bs";


export default function Navigation({ title, condition }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <Navbar.Toggle aria-controls="offcanvasNavbarLabel-expand-sm" />
                <Navbar.Offcanvas id="offcanvasNavbarLabel-expand-sm"
                    aria-labelledby="offcanvasNavbarLabel-expand-sm"
                    placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Navbar.Text>
                            Admin room <a href="/"><BsPersonCircle size={30} /></a>
                        </Navbar.Text>
                        <Navbar.Text>
                            Cart <BsCart onClick={handleShow} size={30} />
                        </Navbar.Text>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            <Offcanvas show={show} onHide={handleClose} responsive="sm" placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p className="mb-0">
                        Add coins
                    </p>
                </Offcanvas.Body>
            </Offcanvas>
        </Navbar>
    )
}