import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { MainPage } from "./pages/main/index";
import { UserPage } from "./pages/user page/index";
// import { Header } from "./components/header/index";

function App() {
  return (
    <Fragment>
      {/* <Header /> */}
      <Switch>
        <Route path="/user" component={UserPage} />
        <Route path="/main/:page" component={MainPage} />
        <Route exact path="/" component={() => <Redirect to="/main/1" />} />
      </Switch>
    </Fragment>
  );
}

export default App;
