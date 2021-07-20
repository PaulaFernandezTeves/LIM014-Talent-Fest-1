//import './App.css';
// import './styles/custom.css';
import './styles/mery.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Care } from './components/ViewCategory/Care';
import { AuthProvider } from './context/AuthProvider';
import { useAuth } from './context/AuthProvider'
import { ListUsers } from './components/admin/ListUsers'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute'

function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/cuidado" component={Care} />
            <PrivateRoute path="/list" component={ListUsers} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
