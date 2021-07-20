//import './App.css';
// import './styles/custom.css';
import './styles/mery.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Care } from './components/ViewCategory/Care';
import { AuthProvider } from './context/AuthProvider';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/home' component={Home} />
            <PrivateRoute path='/cuidado' component={Care} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
