import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {Login} from './components/Login';

function App() {
  return (
    <Container>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{maxWidth:'400px'}}>
          <Login />
        </div>       
      </div>
    </Container>
  );
}

export default App;
