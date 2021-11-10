import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
