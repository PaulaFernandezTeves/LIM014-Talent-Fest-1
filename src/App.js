//import './App.css';
// import './styles/custom.css';
import './styles/mery.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from './components/Login';
import { Home } from './components/Home';
import { MyWork } from './components/home/MyWork';
import { AuthProvider } from './context/AuthProvider';
import { ListUsers } from './components/admin/ListUsers';
import { ReviewPost } from './components/admin/ReviewPost';
import { HistoryPost } from './components/registrador/HistoryPost';
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
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/mi-trabajo" component={MyWork} />
            <PrivateRoute path="/cuidado/salud" component={Health} />
            <PrivateRoute path="/cuidado/seguridad" component={Security} />
            <PrivateRoute path="/cuidado/beneficios" component={Benefit} />
            <PrivateRoute path="/administrador/usuarios" component={ListUsers} />
            <PrivateRoute path="/administrador/revision-post" component={ReviewPost} />
            <PrivateRoute path="/registrador/historial-post" component={HistoryPost} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}
 
export default App;

