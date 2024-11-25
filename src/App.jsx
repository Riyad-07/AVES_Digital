import React from "react";
import Home from "./Home";
import Navbar from "./components/layers/Navbar";
import Footer from "./components/layers/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
