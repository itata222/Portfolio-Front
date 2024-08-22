import React, { useContext, useState } from "react";
import { loginAdminAction } from "../../actions/loginActions";
import { LoginContext } from "../../contexts/loginContext";
import { saveUserOnCookie } from "../../cookies/adminDataCookie";
import { loginAdminToDB } from "../../services/adminService";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [password, setPassword] = useState("");
  const { dispatchAdminData } = useContext(LoginContext);
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    loginAdminToDB({ email, password })
      .then((data) => {
        saveUserOnCookie(data);
        dispatchAdminData(
          loginAdminAction({ admin: data.admin, token: data.token })
        );
        navigate("/shop");
      })
      .catch((e) => setShowErrorMessage(true));
  };
  return (
    <div className="loginForm">
      <h2>Login </h2>
      <form onSubmit={formSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="my@gmail.com"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            placeholder="Mypass123!"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {showErrorMessage && (
          <div className="errorMessage">Unable to login...</div>
        )}
        <button>Go</button>
      </form>
      <span onClick={() => navigate("/")}>Back To Home</span>
    </div>
  );
};

export default LoginForm;
