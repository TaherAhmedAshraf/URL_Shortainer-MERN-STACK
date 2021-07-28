import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import GoLink from "./components/GoLink";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/:alias" component={GoLink} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
