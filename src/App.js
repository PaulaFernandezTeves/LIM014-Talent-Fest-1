import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
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
    <Container>
      <div
        className="d-flex align-items-center justify-content-left"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{maxWidth:'500px'}}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path='/' component={Login} />
              <PrivateRoute path='/home' component={Home} />
              <PrivateRoute path='/cuidado' component={Care} />
            </Switch>
          </AuthProvider>
        </Router>
        </div>       
      </div>
    </Container>
  );
}

export default App;
