import App from "./App";
import { ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ColorModeScript />
    <App />
  </BrowserRouter>
);
