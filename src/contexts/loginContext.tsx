import React, { createContext, useReducer } from "react";
import { getUserFromCookie } from "../cookies/adminDataCookie";
import loginReducer, { adminDataInitialState } from "../reducers/loginReducer";

export const LoginContext = createContext({} as any);

const LoginContextProvider = (props) => {
  const adminDataCookie = getUserFromCookie();
  const [adminData, dispatchAdminData] = useReducer(
    loginReducer,
    adminDataCookie || adminDataInitialState
  );

  return (
    <LoginContext.Provider value={{ adminData, dispatchAdminData }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
