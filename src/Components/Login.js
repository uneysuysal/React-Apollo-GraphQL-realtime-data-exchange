import React,{useState} from 'react'
/*import {Button} from '@material-ui/core';*/
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";


export default function Login() {
    const history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
    /*const[count, setCount] = useState(0)*/
    return (
        <div>
            <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> 
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
        <Button type="button" disabled={!validateForm()} onClick={handleClick}>
      Login
    </Button>
    <Link to="/home">
        <Button type="button">
          <span>Sign Up</span>
        </Button>
      </Link>
      <Link to="/home">
          <div>
        <Button type="button">
          <span>Giriş yapmadan devam et</span>
        </Button></div>
      </Link>
      </Form>
    </div>
         
        </div>
    )
}
