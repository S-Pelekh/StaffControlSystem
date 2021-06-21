import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { MainPage } from "./pages/main/index";
import { UserDetails } from "./pages/user page/index";
import { Header } from "./components/header/index";
import { NewUser } from "./pages/new user/index";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/new_user" component={NewUser} />
        <Route path="/user/:id" component={UserDetails} />
        <Route path="/users" component={MainPage} />
        <Route exact path="/" component={() => <Redirect to="/users" />} />
        <Route component={() => <div>Not found</div>} />
      </Switch>
    </Fragment>
  );
}

export default App;
