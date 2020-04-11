import React from 'react';
import {Link, Router} from '@reach/router';
import AddUser from "./components/AddUser";
import SearchComponet from "./components/searchcomponent";
import state from "./redux/store";
import {Provider} from 'react-redux'
import UserComponent from "./components/UsersComponent";
function App(props:any) {
  return (
      <Provider store={state} >
<div>
    <div className="container text-center">
        <Link to="/add"><button className="btn btn-light">ADD</button></Link>
        <Link to="/search"><button className="btn btn-light">Search</button></Link>
    </div>
    <Router>
        <AddUser path={"/add"} />
        <SearchComponet path={"/search"} />
    </Router>
    <UserComponent/>
</div>
      </Provider>
  );
}

export default App;
