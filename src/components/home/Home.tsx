import React from "react";
import HeaderHome from "../header/HeaderHome";
import Contact from "./Contact";
import Me from "./Me";
import MyWorks from "./MyWorks";
import Circular from "../Circular";

const Home = () => {
  const vw = window.innerWidth;

  return (
    <>
      <HeaderHome />
      <div className="home">
        <Me />
        <MyWorks />
        <Contact />
        {vw > 1000 && <Circular />}
      </div>
    </>
  );
};

export default Home;
