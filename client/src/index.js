import ReactDOM from "react-dom";
// import { ContextProvider } from "./SocketContext";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  {/* <ContextProvider> */}
    <App />
  {/* </ContextProvider> */}
  </BrowserRouter>,
  document.getElementById("root")
);
