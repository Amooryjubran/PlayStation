import { Route, Switch } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={LoginPage} />
      </Switch>
    </>
  );
}

export default App;
