import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {Login} from './components/Login';
import { Home } from './components/Home';
import { Component1 } from './components/home/Component1';
import { Component2 } from './components/home/Component2';
import { Component3 } from './components/home/Component3';
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
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{maxWidth:'500px'}}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path='/' component={Login} />
              <PrivateRoute path='/home' component={Home} />
              <PrivateRoute path='/mi-cultura' component={Component1} />
              <PrivateRoute path='/capacitacion' component={Component2} />
              <PrivateRoute path='/desarrollo' component={Component3} />
              {/* <Route path='/home' component={Home} /> */}
            </Switch>
          </AuthProvider>
        </Router>
        </div>       
      </div>
    </Container>
  );
}

export default App;
