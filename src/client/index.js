import React from "react";
import ReactDOM from "react-dom";

import App from "./Containers/App";

const mountpoint = document.currentScript.previousElementSibling;

ReactDOM.render(<App />, mountpoint);
