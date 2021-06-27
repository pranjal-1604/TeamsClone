import Main from "./components/main";
import Video from "./components/Video";
import "./styling/style.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login.js";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Main} />
        <Route exact path="/video_call" component={Video} />
        {/* <Main />
      
      <Video /> */}
      </Switch>
    </div>
  );
}

export default App;
