import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import { MainPage } from "./pages/main/index";
import { UserPage } from "./pages/user page/index";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/user" component={UserPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
