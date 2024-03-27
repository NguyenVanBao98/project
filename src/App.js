import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./component/Header/Header";
import Content from "./component/Content/Content";
import Footer from "./component/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ListProduct from "./component/ListProduct/ListProduct";
import MyCart from "./component/MyCart/MyCart";
import DetailProduct from "./component/DetailProduct/DetailProduct";
import { CartProvider } from "./useContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Order from "./component/Order/Order";

function App() {
    return (
        <div>
            <CartProvider>
                <ToastContainer />
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Content></Content>}></Route>
                    <Route path="/list-product" element={<ListProduct></ListProduct>}></Route>
                    <Route path="/detail-product/:slug" element={<DetailProduct></DetailProduct>}></Route>
                    <Route path="/search/:slug" element={<ListProduct></ListProduct>}></Route>
                    <Route path="/my-cart" element={<MyCart></MyCart>}></Route>
                    <Route path="/my-order" element={<Order></Order>}></Route>
                </Routes>
                <Footer></Footer>
            </CartProvider>
        </div>
    );
}

export default App;
