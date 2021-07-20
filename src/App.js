//import './App.css';
// import './styles/custom.css';
import './styles/mery.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from './components/Login';
import { Home } from './components/Home';
//import { Care } from './components/ViewCategory/Care';
import { AuthProvider } from './context/AuthProvider';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute';
import {Health} from './components/ViewCategory/subcomponents1/Health';
import {Security} from './components/ViewCategory/subcomponents1/Security';
import { Benefit } from './components/ViewCategory/subcomponents1/Benefit';

function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            
            {/* poner la condicion de si es un onjeto o no del current user */}
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/home' component={Home} />
            <PrivateRoute path='/cuidado/salud' component={Health} />
            <PrivateRoute path='/cuidado/seguridad' component={Security} />
            <PrivateRoute path='/cuidado/beneficios' component={Benefit} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
