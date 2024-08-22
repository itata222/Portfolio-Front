import React from "react";
import HeaderHome from "../header/HeaderHome";
import Contact from "./Contact";
import Me from "./Me";
import MyWorks from "./MyWorks";
import Circular from "../Circular";
import { useDeviceData } from "../../customHooks/deviceDataHook";

const Home = () => {
  const { isDesktop } = useDeviceData();

  return (
    <>
      <HeaderHome />
      <div className="home">
        <Me />
        <MyWorks />
        <Contact />
        {isDesktop && <Circular />}
      </div>
    </>
  );
};

export default Home;
