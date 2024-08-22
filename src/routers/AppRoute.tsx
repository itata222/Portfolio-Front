import { Route, Navigate, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../components/home/Home";
import Footer from "../components/Footer";
import BackGroundWebGL from "../components/BackGroundWebGL";
import ScrollBar from "../components/ScrollBar";
import Shop from "../components/shop/Shop";
import LoginContextProvider from "../contexts/loginContext";
import LoginPage from "../components/login/Login";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import Page404 from "../components/Page404";
import DeviceContextProvider from "../contexts/deviceContext";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <DeviceContextProvider>
          <BackGroundWebGL />
          <ScrollBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route
              path="/login"
              element={
                <UserRoute>
                  <LoginPage />
                </UserRoute>
              }
            />
            <Route
              path="/shop"
              element={
                <AdminRoute>
                  <Shop />
                </AdminRoute>
              }
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </DeviceContextProvider>
      </LoginContextProvider>
    </BrowserRouter>
  );
};

export default AppRoute;
