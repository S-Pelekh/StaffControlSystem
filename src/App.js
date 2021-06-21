import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { MainPage } from "./pages/main/index";
import { UserPage } from "./pages/user page/index";
import { Header } from "./components/header/index";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/user/:id" component={UserPage} />
        <Route path="/users" component={MainPage} />
        <Route exact path="/" component={() => <Redirect to="/users" />} />
        <Route component={() => <div>Not found</div>} />
      </Switch>
    </Fragment>
  );
}

export default App;
