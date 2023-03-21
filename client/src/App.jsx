import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home/ > */}
      {/* <About/> */}
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
