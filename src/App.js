import { Route, Switch } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import Users from "./Components/Users";

import { AuthProvider } from "./Components/Logins/Auth";

import Home from "./Components/Logins/Home";
import Dashboard from "./Components/Logins/Dashboard";
import LogIn from "./Components/Logins/LogIn";
import SignUp from "./Components/Logins/SignUp";
function App() {
  return (
    <>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/home" component={HomePage} />
          <Route path="/account" component={Home} />
          <Route path="/loggedin" component={Dashboard} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </AuthProvider>
    </>
  );
}

export default App;
