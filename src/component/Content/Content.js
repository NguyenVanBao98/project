import React, { useEffect, useState } from "react";
import Intro from "./Intro/Intro";
import "./Content.css";
import { Col, Container, Row } from "react-bootstrap";
import bgProduct from "../../assets/product/bg-product.jpg";
import bgBestSale from "../../assets/product/bestsaler.jpg";
import bgPromo from "../../assets/product/promo.jpg";
import bgBlog from "../../assets/product/blog9.jpg";
import bg1 from "../../assets/product/bg-1.avif";
import bg2 from "../../assets/product/perfume.avif";
import CardProduct from "../CardProduct/CardProduct";
import Slider from "react-slick";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Content = () => {
    AOS.init();
    const [products, setProducts] = useState([]);
    const fetchProduct = async () => {
        const product = await axios.get("https://65e5d593d7f0758a76e78b08.mockapi.io/product");
        setProducts(product.data);
    };
    useEffect(() => {
        fetchProduct();
    }, []);
    var settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="content">
            <Intro></Intro>
            <Container className="featured my-5">
                <Row>
                    <Col className="feature mr-5">
                        <h2>Featured</h2>
                        <span className="my-3 block">The Perfection</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. molestiae aperiam. Nisi delectus at quae repudiandae nobis sunt!</p>
                    </Col>
                    <Col xs={12} md={4} className="top-brand justify-between flex-col mr-5">
                        <div className="like flex justify-center text-white text-6xl">
                            <i class="fa-regular fa-thumbs-up"></i>
                        </div>
                        <h2 className="text-center font-bold">Top Brand</h2>
                        <p className="text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="learn text-center hover:text-white duration-500 cursor-pointer">
                            Learn More
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="support flex justify-between flex-col mr-5">
                        <div className="sup flex justify-center text-white text-6xl">
                            <i class="fa-solid fa-headset"></i>
                        </div>
                        <h2 className="text-center font-bold text-2xl text-white">24/7 Support</h2>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <div className="learn text-center hover:text-white duration-500 cursor-pointer">
                            Learn More
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="about flex" data-aos="fade-up" data-aos-anchor-placement="center-center">
                    <div className="content text-white">
                        <h2>About</h2>
                        <h4>The New Fresh Sensation</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis officia nisi at quod repudiandae quas aut necessitatibus! Nemo veritatis enim dolor assumenda aspernatur
                            sequi et vitae, cupiditate nulla quis velit!
                        </p>
                        <button className="hover:bg-white hover:text-black duration-500">Learn More</button>
                    </div>
                    <div className="pic">
                        <img src={bg1} alt="" />
                    </div>
                </div>
                <div>
                    <div className="sense text-center my-20" data-aos="fade-up" data-aos-anchor-placement="center-center">
                        <h2 className="text-7xl font-bold">Prefume</h2>
                        <p className="text-white font-bold text-5xl">Create Your Signature</p>
                    </div>
                    <div className="flex border-1" data-aos="fade-up" data-aos-anchor-placement="center-center">
                        <div className="image-1 w-1/3">
                            <img src={bgProduct} alt="" />
                        </div>
                        <div className="w-1/3 p-3 flex flex-col justify-between align-middle bg-black">
                            <h3 className="text-5xl">Our Product</h3>
                            <p className="text-white">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, ipsam inventore eveniet quisquam, tempora nisi nemo provident doloremque ad rerum culpa tenetur non
                                perspiciatis iusto gvitae voluptatibus ratione eligendi magni.
                            </p>
                            <button className="btn border-1 rounded-2xl py-2">Learn More</button>
                        </div>
                        <div
                            className="w-1/3 flex flex-col justify-between align-middle p-3"
                            style={{ background: `linear-gradient(90deg, rgba(30,32,34,0.7525603991596639) 44%, rgba(10,10,25,0.6181066176470589) 58%),url(${bg2}) no-repeat` }}
                        >
                            <h3 className="text-5xl">Sunset Lime</h3>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque necessitatibus sequi maiores accusamus harum.</p>
                            <ul>
                                <li>
                                    <i class="fa-solid fa-circle-check"></i> sed quia non numquam
                                </li>
                                <li>
                                    <i class="fa-solid fa-circle-check"></i> modi tempora incidunt
                                </li>
                                <li>
                                    <i class="fa-solid fa-circle-check"></i> nostrum exercitationem
                                </li>
                                <li>
                                    <i class="fa-solid fa-circle-check"></i> vel illum qui dolorem
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="headlight my-20" data-aos="fade-up" data-aos-anchor-placement="center-center">
                    <h2 className="text-center font-bold text-7xl my-4">Product</h2>
                    <p className="text-center text-white font-bold text-4xl">Our Latest - Best Saler - Promotion Products</p>
                </div>
                <div className="new-product my-5" data-aos="fade-left">
                    <div className="left" style={{ background: `linear-gradient(90deg, rgba(30,32,34,0.7525603991596639) 44%, rgba(10,10,25,0.6181066176470589) 58%),url(${bgProduct}) center` }}>
                        <span className="font-bold text-white text-6xl inset-y-60 inset-x-50 z-10 ">Latest Products</span>
                    </div>
                    <div className="right">
                        <Slider {...settings}>
                            {products &&
                                products.map((item, index) => {
                                    if (index < 5) {
                                        return (
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
                                        );
                                    }
                                })}
                        </Slider>
                    </div>
                </div>
                <div className="new-product my-8" data-aos="fade-left">
                    <div className="left" style={{ background: `linear-gradient(90deg, rgba(30,32,34,0.7525603991596639) 44%, rgba(10,10,25,0.6181066176470589) 58%),url(${bgBestSale}) center` }}>
                        <span className="font-bold text-white text-6xl inset-y-60 inset-x-50 z-10 ">Best Saler Products</span>
                    </div>
                    <div className="right">
                        <Slider {...settings}>
                            {products &&
                                products.map((item) => {
                                    if (item.rating >= 4.5) {
                                        return (
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
                                        );
                                    }
                                })}
                        </Slider>
                    </div>
                </div>
                <div className="new-product my-8" data-aos="fade-left">
                    <div className="left " style={{ background: `linear-gradient(90deg, rgba(30,32,34,0.7525603991596639) 44%, rgba(10,10,25,0.6181066176470589) 58%),url(${bgPromo}) center` }}>
                        <span className=" font-bold text-white text-6xl inset-y-60 inset-x-50 z-10 ">Promotion Products</span>
                    </div>
                    <div className="right">
                        <Slider {...settings}>
                            {products &&
                                products.map((item) => {
                                    if (item.sale > 1) {
                                        return (
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
                                        );
                                    }
                                })}
                        </Slider>
                    </div>
                </div>
                <div className="headlight my-20" data-aos="fade-up" data-aos-anchor-placement="center-center">
                    <h2 className="text-center font-bold text-7xl my-2">Blog</h2>
                    <p className="text-center text-white font-bold text-4xl">Blog & Article</p>
                </div>
                <Row className="my-10" data-aos="fade-up" data-aos-anchor-placement="center-center">
                    <Col lg={4} sm={12} className="blog flex justify-between flex-col">
                        <img src={bgPromo} alt="" />
                        <div className="date my-2 ">
                            <i class="fa-regular fa-calendar-days"></i>
                            November 16, 2022
                        </div>
                        <a href="">The essence of Happy</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <button>
                            Learn More <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </Col>
                    <Col lg={4} sm={12} className="blog flex justify-between flex-col">
                        <img src={bgBestSale} alt="" />
                        <div className="date my-2">
                            <i class="fa-regular fa-calendar-days"></i>
                            November 16, 2022
                        </div>
                        <a href="">Men’s favorite perfume</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <button>
                            Learn More <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </Col>
                    <Col lg={4} sm={12} className="blog flex justify-between flex-col">
                        <img src={bgBlog} alt="" />
                        <div className="date my-2 ">
                            <i class="fa-regular fa-calendar-days"></i>
                            November 16, 2022
                        </div>
                        <a href="">Benefits of using perfume</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <button>
                            Learn More <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Content;
