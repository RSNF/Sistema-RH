import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TimeAgo from 'javascript-time-ago'

import br from 'javascript-time-ago/locale/pt.json'

TimeAgo.addDefaultLocale(br)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
