import { createContext, useEffect, useState } from "react";

export const DeviceContext = createContext(null);

const DeviceContextProvider = ({ children }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  const isDesktop = width >= 1000;

  return (
    <DeviceContext.Provider value={{ isMobile, isDesktop }}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContextProvider;
