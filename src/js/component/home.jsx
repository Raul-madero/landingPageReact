import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
};
export default Home;
