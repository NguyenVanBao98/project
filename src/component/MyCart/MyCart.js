import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MyCart.css";
import { useCart } from "../../useContext";
import { Link } from "react-router-dom";
import bgMyCart from "../../assets/product/bg-my-cart.webp";

const MyCart = () => {
    const { cart, deteleToCart } = useCart();
    const [listCart, setListCart] = useState(cart);
    const handleChange = (id, type) => {
        const newCart = [...listCart];
        const checkIndex = listCart.findIndex((item) => item.id === id);
        if (type === "plus") {
            newCart[checkIndex].quality++;
        }
        if (type === "minus") {
            if (newCart[checkIndex].quality > 1) {
                newCart[checkIndex].quality--;
            }
        }
        if (type === "detele") {
            newCart.splice(checkIndex, 1);
            deteleToCart(checkIndex, 1);
            localStorage.setItem("LIST_PRODUCT", JSON.stringify(newCart));
        }
        setListCart(newCart);
        localStorage.setItem("LIST_PRODUCT", JSON.stringify(newCart));
    };
    return (
        <Container>
            <h1 className="my-top-line" style={{ background: `linear-gradient(90deg, rgba(30,32,34,0.7525603991596639) 44%, rgba(10,10,25,0.6181066176470589) 58%),url(${bgMyCart}) no-repeat` }}>
                My Cart
            </h1>
            <Row>
                <Col lg={8}>
                    {listCart.map((item) => (
                        <div className="my-cart">
                            <div className="left relative">
                                <img src={item.thumb} alt="" />
                                {item.sale !== "false" && (
                                    <div className="thumb-sale">
                                        <h3>{item.sale}%</h3>
                                    </div>
                                )}
                            </div>
                            <div className="right">
                                <div className="top">
                                    <h2>{item.name}</h2>
                                    <button>
                                        <i class="fa-solid fa-trash-can" onClick={() => handleChange(item.id, "detele")}></i>
                                    </button>
                                </div>
                                <div className="price">
                                    Price:
                                    {item.sale !== "false" && <span className="price-discount mx-1">{item.price - (item.price * item.sale) / 100}$</span>}
                                    <span className={`price-market mx-1 ${item.sale > 1 ? "active" : ""}`}>{item.price}$</span>
                                </div>
                                <div className="bottom">
                                    <div className="quality">
                                        Quality:
                                        <button>
                                            <i class="fa-solid fa-minus mx-2" onClick={() => handleChange(item.id, "minus")}></i>
                                        </button>{" "}
                                        <span className="mx-1">{item.quality}</span>{" "}
                                        <button>
                                            <i class="fa-solid fa-plus mx-2" onClick={() => handleChange(item.id, "plus")}></i>
                                        </button>
                                    </div>
                                    <div>
                                        Total:
                                        {item.sale !== "false" && <span className="price-discount mx-1">{(item.price - (item.price * item.sale) / 100) * item.quality}$</span>}
                                        <span className={`price-market mx-1 ${item.sale > 1 ? "active" : ""}`}>{item.price * item.quality}$</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col lg={4}>
                    {listCart.length > 0 && (
                        <div className="total flex justify-between">
                            <h4>Total Price: </h4>
                            <div>
                                <h4>
                                    {listCart.reduce((total, item) => {
                                        if (item.sale !== "false") {
                                            return total + (item.price - (item.price * item.sale) / 100) * item.quality;
                                        } else {
                                            return total + item.price * item.quality;
                                        }
                                    }, 0)}
                                    $
                                </h4>
                            </div>
                        </div>
                    )}
                    {listCart.length > 0 && (
                        <Link to="/my-order" className="my-cart-btn">
                            <button>
                                Order Now <i class="fa-solid fa-check-to-slot"></i>
                            </button>
                        </Link>
                    )}
                </Col>
            </Row>
            {listCart.length === 0 && (
                <Container>
                    <Link to="/">
                        <button className="notice"> Opps ! Look Like Your Cart Is Empty Click Here To Return Home Page</button>
                    </Link>
                </Container>
            )}
        </Container>
    );
};

export default MyCart;

