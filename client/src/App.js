import Video from "./components/Video";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/video_call" component={Video} />
      </Switch>
    </div>
  );
}

export default App;
