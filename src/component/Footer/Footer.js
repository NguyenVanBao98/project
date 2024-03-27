import React from "react";
import logo from "../../assets/logo/Aroma.png";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import bgFooter from "../../assets/product/bgFooter.jpg";

const Footer = () => {
    return (
        <div className="footer" style={{ background: `linear-gradient(90deg, rgba(30,32,34,0.7525603991596639) 44%, rgba(10,10,25,0.6181066176470589) 58%),url(${bgFooter})` }}>
            <Container className="my-15 p-10 inset-0 z-20">
                <Row>
                    <Col lg={3} className="footer-logo">
                        <img src={logo} alt="" />
                        <h1 className="text-center">Aroma Perfume</h1>
                    </Col>
                    <Col lg={3}>
                        <h3 className="text-center text-white text-4xl font-bold">Navigation</h3>
                        <ul className="list text-white text-xl">
                            <li>Home</li>
                            <li>Pages</li>
                            <li>About Us</li>
                            <li>Services</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h3 className="text-center text-white text-4xl font-bold">Quick Link</h3>
                        <ul className="list text-white text-xl">
                            <li>Contact Us</li>
                            <li>FAQs</li>
                            <li>Booking</li>
                            <li>Pages</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h3 className="text-center text-white text-4xl font-bold">Services</h3>
                        <ul className="list text-white text-xl">
                            <li>Home</li>
                            <li>Contact</li>
                            <li>Blog</li>
                            <li>404</li>
                        </ul>
                    </Col>
                </Row>
                <ul className="contact">
                    <li className="text-white font-bold">
                        <i class="fa-solid fa-location-dot"></i> London Eye, UK
                    </li>
                    <li className="text-white font-bold">
                        <i class="fa-solid fa-phone"></i> 088-777-666-85
                    </li>
                    <li className="text-white font-bold">
                        <i class="fa-solid fa-envelope"></i> mail@grance.com
                    </li>
                    <li>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </li>
                </ul>
                <h6 className="copy-right">
                    <i class="fa-regular fa-copyright">2024 Aroma • Nguyen Van Bao • All Rights Reserved</i>
                </h6>
            </Container>
        </div>
    );
};

export default Footer;
