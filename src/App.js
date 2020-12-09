import React, {Suspense} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./components/Search";
const App = () => (
  <Router>
    <Suspense fallback={<h1>Loading</h1>}>
      <Switch>
        <Route path="/search" component={Search} />
      </Switch>
    </Suspense>
  </Router>
);
export default App