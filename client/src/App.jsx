import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import SignUp from "./Components/User/SignUp";
import Login from "./Components/User/Login";
import NotFound from "./Components/Other/NotFound";
import Profile from "./Components/User/Profile";
import Shop from "./Components/Shop/Shop";
import Cart from "./Components/Cart/Cart";
import ItemPage from "./Components/Shop/ItemPage";
import Checkout from "./Components/Checkout/Checkout";
import Navbarnew from "./Components/Navbar/Navbarnew";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Navbarnew />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ItemPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
