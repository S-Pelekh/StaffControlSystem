import { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MainPage } from './pages/main/index';
import { NewUser } from './pages/new user/index';
import { EditUser } from './pages/edit user/index';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/new_user" component={NewUser} />
        <Route path="/users" component={MainPage} />
        <Route exact path="/" component={() => <Redirect to="/users" />} />
        <Route path="/edit_user/:id" component={EditUser} />
        <Route component={() => <div>Not found</div>} />
      </Switch>
    </Fragment>
  );
}

export default App;
