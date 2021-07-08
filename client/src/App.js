import Video from "./components/Video";
import { Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/video_call" component={Video} />
      </Switch>
    </div>
  );
}

export default App;
