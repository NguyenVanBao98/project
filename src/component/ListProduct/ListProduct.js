import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import axios from "axios";
import CardProduct from "../CardProduct/CardProduct";
import bgPerfume from "../../assets/product/bg-perfume.avif";
import { useParams } from "react-router-dom";

const ListProduct = () => {
    const [products, setProducts] = useState([]);
    const [uniqueBrands, setUniqueBrands] = useState([]);
    const [filter, setNewFilter] = useState([]);
    const { slug: keySearch } = useParams();
    console.log(keySearch);

    const fetchProduct = async () => {
        const product = await axios.get("https://65e5d593d7f0758a76e78b08.mockapi.io/product");
        setProducts(product.data);
    };
    useEffect(() => {
        fetchProduct();
    }, []);

    useEffect(() => {
        const listBrand = [...new Set(products.map((item) => item.brand))];
        setUniqueBrands(listBrand);
        setNewFilter(products);
    }, [products]);

    useEffect(() => {
        const newSearch = products.filter((item) => item.brand === keySearch);
        setNewFilter(newSearch);
    }, [keySearch]);

    const handleFilter = (brand, gender, season, min, max) => {
        let result = products;
        if (brand) {
            result = result.filter((item) => item.brand === brand);
        }
        if (gender) {
            result = result.filter((item) => item.gender === gender);
        }
        if (season) {
            result = result.filter((item) => item.season === season);
        }
        if (min !== "" && max) {
            result = result.filter((item) => {
                const discount = item.price - (item.price * item.sale) / 100;
                if (discount) {
                    return discount >= min && discount <= max;
                } else {
                    return item.price >= min && item.price <= max;
                }
            });
        }
        setNewFilter(result);
    };

    return (
        <div className="list-product">
            <div className="top my-10">
                <h2
                    className="list-product-head flex"
                    style={{ background: `linear-gradient(90deg, rgba(30,32,34,0.7525603991596639) 44%, rgba(10,10,25,0.6181066176470589) 58%),url(${bgPerfume}) no-repeat` }}
                >
                    PERFUME
                </h2>
            </div>
            <Container>
                <Row>
                    <Col lg={3} md={4} sm={12} xs={12}>
                        <h2>Filter By: </h2>
                        <div className="option">
                            <h3>Perfume Brand:</h3>
                            {uniqueBrands &&
                                uniqueBrands.map((item) => (
                                    <button className="brand" onClick={() => handleFilter(item, null, null)}>
                                        {item}
                                    </button>
                                ))}
                        </div>
                        <div className="option">
                            <h3>Gender:</h3>
                            <button onClick={() => handleFilter(null, "Male", null)}>Male</button>
                            <button onClick={() => handleFilter(null, "Female", null)}>Female</button>
                            <button onClick={() => handleFilter(null, "Unisex", null)}>UniSex</button>
                        </div>
                        <div className="option">
                            <h3>Season:</h3>
                            <button onClick={() => handleFilter(null, null, "Spring")}>Spring</button>
                            <button onClick={() => handleFilter(null, null, "Summer")}>Summer</button>
                            <button onClick={() => handleFilter(null, null, "Autumm")}>Autumm</button>
                            <button onClick={() => handleFilter(null, null, "Winter")}>Winter</button>
                        </div>
                        <div className="option">
                            <h3>Price:</h3>
                            <button onClick={() => handleFilter(null, null, null, 0, 70)}>0 - 70$</button>
                            <button onClick={() => handleFilter(null, null, null, 70, 150)}>70$ - 150$</button>
                            <button onClick={() => handleFilter(null, null, null, 150, 10000)}>150$ and More ... </button>
                        </div>
                    </Col>
                    <Col lg={9} md={8} sm={12} xs={12}>
                        <div className="list">
                            <Row>
                                {filter &&
                                    filter.map((item) => {
                                        return (
                                            <Col lg={4} md={6} sm={6} xs={12}>
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
                                            </Col>
                                        );
                                    })}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ListProduct;
