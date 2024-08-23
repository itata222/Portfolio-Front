import React from "react";
import Modal from "../Modal";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="login">
      <Modal component={<LoginForm />} />
    </div>
  );
};

export default LoginPage;
