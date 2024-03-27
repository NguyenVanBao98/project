import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./DetailProduct.css";
import bgHead from "../../assets/product/bg-head.webp";
import Slider from "react-slick";
import CardProduct from "../CardProduct/CardProduct";
import { useCart } from "../../useContext";
import { toast } from "react-toastify";

const DetailProduct = () => {
    const { addToCart } = useCart();
    const handleAdd = () => {
        toast.success("Success ADD CART !", {
            position: "top-center",
            autoClose: 1000,
        });
        addToCart(detail);
    };
    const { slug: id } = useParams();
    const [detail, setDetail] = useState([]);
    const [products, setProducts] = useState([]);
    const fetchDetail = async () => {
        const details = await axios.get(`https://65e5d593d7f0758a76e78b08.mockapi.io/product/${id}`);
        setDetail(details.data);
    };
    const fetchProduct = async () => {
        const product = await axios.get("https://65e5d593d7f0758a76e78b08.mockapi.io/product");
        setProducts(product.data);
    };
    useEffect(() => {
        fetchDetail();
    }, []);
    useEffect(() => {
        fetchProduct();
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 2000,
    };
    return (
        <div className="detail-product">
            <div>
                <h1 className="head my-10 block" style={{ background: `linear-gradient(90deg, rgba(30,32,34,0.7525603991596639) 44%, rgba(10,10,25,0.6181066176470589) 58%),url(${bgHead}) center` }}>
                    Detail Product
                </h1>
            </div>
            <Container>
                <Row className="my-10">
                    <Col lg={4} className="left relative">
                        <img src={detail.thumb} alt="" />
                        {detail.sale !== "false" && (
                            <div className="thumb-sale">
                                <h3>{detail.sale}%</h3>
                            </div>
                        )}
                    </Col>
                    <Col lg={8} className="right">
                        <div>
                            <h2 className="font-bold">{detail.name}</h2>
                        </div>
                        <div className="text-white">
                            <ul className="list flex justify-between">
                                <li>{detail.brand}</li>
                                <li>{detail.gender}</li>
                                <li>{detail.season}</li>
                            </ul>
                        </div>
                        <div className="disc text-white">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, similique id. Temporibus nulla quia deleniti saepe quo neque veritatis modi. Voluptatem ratione
                                repellat necessitatibus ducimus rem quae qui recusandae magni.
                            </p>
                        </div>
                        <div className="price flex justify-between">
                            <div>
                                Price:
                                {detail.sale !== "false" && <span className="price-discount">{detail.price - (detail.price * detail.sale) / 100} $</span>}
                                <span className={`price-market mx-1 ${detail.sale > 1 ? "active" : ""}`}>{detail.price}$</span>
                            </div>
                            <div>
                                <i class="fa-solid fa-star mx-2"></i>
                                {detail.rating}
                            </div>
                        </div>
                        <div className="add">
                            <button className="font-bold border-none" onClick={handleAdd}>
                                {" "}
                                Add To Cart <i class="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </Col>
                </Row>
                <div>
                    <div>
                        <h3>Related Products you may like: </h3>
                    </div>
                    <div className="chose my-5">
                        <button className="mr-4 text-xl">{detail.brand}</button>
                        <button className="mx-4 text-xl">{detail.gender}</button>
                        <button className="mx-4 text-xl">{detail.season}</button>
                    </div>
                    <Slider {...settings}>
                        {products &&
                            products.map((item) => (
                                <CardProduct
                                    id={item.id}
                                    key={item.id}
                                    thumb={item.thumb}
                                    name={item.name}
                                    brand={item.brand}
                                    gender={item.gender}
                                    season={item.season}
                                    rating={item.rating}
                                    sale={item.sale}
                                    price={item.price}
                                ></CardProduct>
                            ))}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default DetailProduct;
