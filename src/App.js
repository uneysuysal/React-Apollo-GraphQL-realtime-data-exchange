
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home"
import Form from './Components/Form';
import Login from './Components/Login';
import About from './Components/About';

function App() {
  return (
    
    <div className="App">
          <Router>
          <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/Form" component={Form} />
      <Route exact path="/about" component={About} />
    </Router>
    </div>
    
  );
}

export default App;
