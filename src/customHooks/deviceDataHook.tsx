import { useContext } from "react";
import { DeviceContext } from "../contexts/deviceContext";

export const useDeviceData = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error("useDeviceData must be used within a DeviceDataProvider");
  }
  return context;
};
