import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutAdminAction } from "../../actions/loginActions";
import { LoginContext } from "../../contexts/loginContext";
import { deleteUserFromCookie } from "../../cookies/adminDataCookie";
import { logoutAdminToDB } from "../../services/adminService";
import HeaderRight from "./HeaderRight";

const HeaderHome = () => {
  const { adminData, dispatchAdminData } = useContext(LoginContext);
  console.log(adminData);
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="headerHome">
        <div className="siteHeadlines">
          <div
            onClick={() => {
              document.querySelector(".me").scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            Me
          </div>
          <div
            onClick={() => {
              document.querySelector(".works").scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            Works
          </div>
          <div
            onClick={() => {
              document.querySelector(".contact").scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            Contact
          </div>
          {!!adminData.token && (
            <>
              <NavLink className="shop" to="/shop">
                Shop
              </NavLink>
              <div
                onClick={() => {
                  logoutAdminToDB(adminData.token)
                    .then((data) => {
                      dispatchAdminData(logoutAdminAction());
                      deleteUserFromCookie();
                      navigate("/home");
                    })
                    .catch((e) => console.log(e));
                }}
              >
                Logout
              </div>
            </>
          )}
        </div>
      </div>
      <HeaderRight />
    </div>
  );
};

export default HeaderHome;
