import React from "react";
import bgImg1 from "../../../assets/intro/bg-intro1.webp";
import bgImg2 from "../../../assets/intro/bg-intro2.jpg";
import img1 from "../../../assets/intro/intro1.png";
import img2 from "../../../assets/intro/intro2.png";
import Slider from "react-slick";

const Intro = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
    };
    return (
        <div className="slider-contain p-10">
            <Slider {...settings}>
                <div className="intro">
                    <div className="bg-img">
                        <img src={bgImg1} alt="" />
                    </div>
                    <div className="img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="text-bg">
                        <h1>Welcome To Our Store</h1>
                        <h3>Let the scent say hello </h3>
                    </div>
                </div>
                <div className="intro">
                    <div className="bg-img">
                        <img src={bgImg2} alt="" />
                    </div>
                    <div className="img">
                        <img src={img2} alt="" />
                    </div>
                    <div className="text-bg">
                        <h1>A scent that suits your personality </h1>
                        <h3>Find a Signature Scent you Love</h3>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Intro;
