import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/global-styles.jsx";
import Providers from "./providers";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <GlobalStyle />
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
