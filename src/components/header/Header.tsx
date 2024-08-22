import React, { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { logoutAdminAction } from "../../actions/loginActions";
import { LoginContext } from "../../contexts/loginContext";
import { deleteUserFromCookie } from "../../cookies/adminDataCookie";
import { logoutAdminToDB } from "../../services/adminService";
import HeaderRight from "./HeaderRight";

const Header = () => {
  const { adminData, dispatchAdminData } = useContext(LoginContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isType2Header = location.pathname !== "/";

  return (
    <div className="header">
      <div className="headerHome">
        {!isType2Header ? (
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
        ) : (
          <div>
            <Link className="backHomeHeader" to={"/"} replace>
              Back Home
            </Link>
          </div>
        )}
      </div>
      <HeaderRight />
    </div>
  );
};

export default Header;
