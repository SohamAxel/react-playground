import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MyErrorBoundary from "./Components/MyErrorBoundary.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <MyErrorBoundary fallback={<div>My Error Boundary</div>}>
    <App />
  </MyErrorBoundary>
  // {/* </React.StrictMode> */}
);
