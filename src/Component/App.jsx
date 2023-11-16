
import Footer from "./BaseComponent/Footer";
import Cart from "./Categories/Cart";
import Details from "./Categories/Details";
import ProductList from "./Categories/ProductList";
import Features from "./BranchComponent/Features";
import Home from "./BranchComponent/Home";
import Nav from "./BaseComponent/NavBar";
import { Routes , Route, Outlet } from "react-router-dom";
import Error from "./BranchComponent/Error";
import Contact from "./BranchComponent/Contact";
export default function App(){
    return(
        < >
        <div className="bg-white">
            <Nav/>
            <Routes>
                <Route path="*" element={<Error/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/features" element={<Features/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Outlet/>}>
                    <Route path=":Categories" element={<ProductList/>}/>
                    <Route path="details/:id" element={<Details/>}/>
                    <Route path="cart" element={<Cart/>}/>
                </Route>
            </Routes>
            <Footer/>
            </div>
        </>
    )
}