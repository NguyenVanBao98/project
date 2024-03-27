import React from "react";
import "./CardProduct.css";
import { Link } from "react-router-dom";
import { useCart } from "../../useContext";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";

const CardProduct = (props) => {
    const { addToCart } = useCart();
    const handleAdd = () => {
        toast.success("Success ADD CART !", {
            position: "top-center",
            autoClose: 1000,
        });
        addToCart(props);
    };
    return (
        <div className="card-product">
            <Link to={`/detail-product/${props.id}`} className="thumb">
                <img src={props.thumb} alt="" />
                {props.sale !== "false" && (
                    <div className="thumb-sale">
                        <h3>{props.sale}%</h3>
                    </div>
                )}
                <div className="more-detail">
                    <div className="click">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                        <p>Click For More Detail</p>
                    </div>
                </div>
            </Link>
            <div className="product-name">
                <h3>{props.name}</h3>
            </div>
            <div className="cata">
                <div className="spec">{props.brand}</div>
                <div className="spec">{props.gender}</div>
                <div className="spec">{props.season}</div>
            </div>
            <div className="flex items-center justify-between">
                <div className="price">
                    Price:
                    {props.sale !== "false" && <span className="price-discount mx-1">{props.price - (props.price * props.sale) / 100}$</span>}
                    <span className={`price-market mx-1 ${props.sale > 1 ? "active" : ""}`}>{props.price}$</span>
                </div>
                <div className="spec text-lg font-bold">
                    <i class="fa-solid fa-star"></i> {props.rating}
                </div>
            </div>
            <button onClick={handleAdd}>
                Add To Cart <i class="fa-solid fa-cart-plus"></i>
            </button>
        </div>
    );
};

export default CardProduct;
