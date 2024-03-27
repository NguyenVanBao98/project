import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useCart } from "../../useContext";
import emailjs from "emailjs-com";
import axios from "axios";
import "./Order.css";
import { useNavigate } from "react-router-dom";
import bgOrder from "../../assets/product/bgOrder.jpg";

const Order = () => {
    const { cart, deteleAll } = useCart();
    const navigate = useNavigate();
    const [listCart, setListCart] = useState(cart);
    const [input, setInput] = useState({
        user_name: "",
        user_phone: "",
        user_address: "",
        user_mail: "",
        user_notice: "",
        user_cart: "",
    });
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };
    const [err, setErr] = useState({
        user_name: "",
        user_phone: "",
        user_address: "",
        user_mail: "",
        user_notice: "",
        user_cart: "",
    });
    const handleUpdate = async (e) => {
        e.preventDefault();

        const newErr = { ...err };
        if (!input.user_name) {
            newErr.user_name = "Your Name is Empty";
        } else {
            newErr.user_name = "";
        }
        if (!input.user_phone || input.user_phone.length < 9) {
            newErr.user_phone = "Your Phone is Empty and Your Number Must Have 10 number";
        } else {
            newErr.user_phone = "";
        }
        if (!input.user_address) {
            newErr.user_address = "Your Address is Empty";
        } else {
            newErr.user_address = "";
        }
        if (!input.user_mail) {
            newErr.user_mail = "Your Mail is Empty";
        } else {
            newErr.user_mail = "";
        }

        setErr(newErr);
        console.log(Object.values(newErr).every((item) => item === ""));
        if (Object.values(newErr).every((item) => item === "") === true) {
            emailjs.sendForm("service_wnpywz1", "template_bfd9ajm", e.target, "kVD4Aly2dMDqT24bM").then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
            const infoCustom = {
                info: input,
                product: listCart,
            };
            const result = await axios.post("https://65e5d593d7f0758a76e78b08.mockapi.io/order", infoCustom);
            if (result.status === 201) {
                alert("add Successed");
                navigate("/");
                deteleAll(listCart);
            }
        }
    };
    return (
        <div className="my-order">
            <h1 style={{ background: `linear-gradient(90deg, rgba(30,32,34,0.7525603991596639) 44%, rgba(10,10,25,0.6181066176470589) 58%),url(${bgOrder}) no-repeat` }}>Your Order Product</h1>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div>
                            <form onSubmit={handleUpdate}>
                                <h2>Your Information: </h2>
                                <div className="my-7">
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder={`${err.user_name ? err.user_name : "Customer Name"}`}
                                        onChange={handleChange}
                                        className={`"block w-3/4 my-6 py-3 px-3 outline-none text-black rounded-2xl ${err.user_name && "border-8 border-red-600 font-bold"}`}
                                    />
                                    <input
                                        type="number"
                                        name="user_phone"
                                        placeholder={`${err.user_phone ? err.user_phone : "Customer Phone"}`}
                                        onChange={handleChange}
                                        className={`"block w-3/4 my-6 py-3 px-3 outline-none text-black rounded-2xl ${err.user_phone && "border-8 border-red-600 font-bold"}`}
                                    />
                                    <input
                                        type="text"
                                        name="user_address"
                                        placeholder={`${err.user_address ? err.user_address : "Customer Address"}`}
                                        onChange={handleChange}
                                        className={`"block w-3/4 my-6 py-3 px-3 outline-none text-black rounded-2xl ${err.user_address && "border-8 border-red-600 font-bold"}`}
                                    />
                                    <input
                                        type="text"
                                        name="user_mail"
                                        placeholder={`${err.user_mail ? err.user_mail : "Customer mail"}`}
                                        onChange={handleChange}
                                        className={`"block w-3/4 my-6 py-3 px-3 outline-none text-black rounded-2xl ${err.user_mail && "border-8 border-red-600 font-bold"}`}
                                    />
                                    <input
                                        type="text"
                                        name="user_notice"
                                        placeholder="Customer Notice"
                                        onChange={handleChange}
                                        className="block w-3/4 my-6 py-3 px-3 outline-none text-black rounded-2xl"
                                    />
                                </div>
                                <h2>Chose Your Payment & Ship: </h2>
                                <div className="my-order-pay">
                                    <button className="block w-3/4 my-6 rounded-2xl">
                                        <input type="checkbox" className="w-10" />
                                        <i class="fa-solid fa-truck-fast"></i> Payment on delivery
                                    </button>
                                    <button className="block w-3/4 my-6 rounded-2xl">
                                        <input type="checkbox" className="w-10" />
                                        <i class="fa-solid fa-money-bill-transfer"></i> Banking Transfer
                                    </button>
                                    <button type="submit" className="order block w-full my-14 mx-auto rounded-2xl">
                                        Pay Order Now
                                        <i class="fa-solid fa-money-check-dollar mx-3"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <h2>Your Cart: </h2>
                        </div>
                        {listCart &&
                            listCart.map((item) => (
                                <div className="my-order-card flex my-7">
                                    <div className="my-order-left relative">
                                        <img src={item.thumb} alt="" className="rounded-lg w-40" />
                                        {item.sale !== "false" && (
                                            <div className="thumb-sale">
                                                <h3 className="text-xs">{item.sale}%</h3>
                                            </div>
                                        )}
                                    </div>
                                    <div className="my-order-right px-8 flex flex-col justify-between w-full">
                                        <h4 className="text-2xl">{item.name}</h4>
                                        <div className="price">
                                            Price:
                                            {item.sale !== "false" && <span className="price-discount mx-1">{item.price - (item.price * item.sale) / 100}$</span>}
                                            <span className={`my-order-price-market mx-1 ${item.sale > 1 ? "active" : ""}`}>{item.price}$</span>
                                        </div>
                                        <div className="my-order-total flex justify-between">
                                            <div>
                                                <h4>Quality: {item.quality}</h4>
                                            </div>
                                            <div>
                                                Total:
                                                {item.sale !== "false" && <span className="my-order-price-discount mx-1">{(item.price - (item.price * item.sale) / 100) * item.quality}$</span>}
                                                <span className={`my-order-price-market mx-1 ${item.sale > 1 ? "active" : ""}`}>{item.price * item.quality}$</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Order;


