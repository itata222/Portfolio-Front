import ReactDOM from "react-dom/client";
import "./styles/styles.scss";
import AppRoute from "./routers/AppRoute";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<AppRoute />);
