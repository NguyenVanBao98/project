import { createContext, useContext, useState } from "react";

const CardContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(localStorage.getItem("LIST_PRODUCT") ? JSON.parse(localStorage.getItem("LIST_PRODUCT")) : []);
    const addToCart = (product) => {
        const newCart = [...cart];
        const checkIndex = newCart.findIndex((item) => item.id === product.id);
        if (checkIndex >= 0) {
            newCart[checkIndex].quality++;
        } else {
            const newProduct = { ...product };
            newProduct.quality = 1;
            newCart.push(newProduct);
        }
        setCart(newCart);
        localStorage.setItem("LIST_PRODUCT", JSON.stringify(newCart));
    };
    const deteleToCart = (index, id) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };
    const deteleAll = (cart) => {
        const newCart = [...cart];
        const result = newCart.splice(newCart.length);
        setCart(result);
        localStorage.setItem("LIST_PRODUCT", JSON.stringify(result));
    };
    return <CardContext.Provider value={{ addToCart, cart, deteleToCart, deteleAll }}>{children}</CardContext.Provider>;
};

const useCart = () => {
    return useContext(CardContext);
};

export { CartProvider, useCart };
