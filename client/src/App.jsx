import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import SignUp from "./Components/Login-SignUp/SignUp";
import Login from "./Components/Login-SignUp/Login";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home/ > */}
      {/* <About/> */}
      {/* <Contact/> */}
      {/*<SignUp/>*/}
      <Login/>
      <Footer/>
    </>
  );
};

export default App;
