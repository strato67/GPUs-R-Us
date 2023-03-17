import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home/ > */}
      <About/>
      <Footer/>
    </>
  );
};

export default App;
