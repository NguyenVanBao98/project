import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo/Aroma.png";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../useContext";

const Header = () => {
    const { cart } = useCart();
    const [keySearch, setKeySearch] = useState();
    const navigator = useNavigate();
    const handleSearch = (e) => {
        if (e.keyCode === 13) {
            navigator(`/search/${keySearch}`);
            setKeySearch("");
        }
    };
    return (
        <Navbar expand="lg">
            <Container className="menu">
                <NavLink to={"/"} className="logo">
                    <img src={logo} alt="" />
                    <h1>Aroma</h1>
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="list me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                        <NavLink to={"/"}>Home</NavLink>
                        <Nav.Link href="#action2">About Us</Nav.Link>
                        <NavLink to="/list-product">Perfume</NavLink>
                        <Nav.Link href="#action4">Blog</Nav.Link>
                        <Nav.Link href="#action5">Contact Us</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search Products or Brand"
                            className="me-2"
                            aria-label="Search"
                            value={keySearch}
                            onChange={(e) => setKeySearch(e.target.value)}
                            onKeyDown={handleSearch}
                        />
                        {/* <Button variant="outline-success" onClick={() => handleSearch()}>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </Button> */}
                    </div>
                </Navbar.Collapse>
                <NavLink to="/my-cart" className="cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>{cart.length}</span>
                </NavLink>
            </Container>
        </Navbar>
    );
};

export default Header;
