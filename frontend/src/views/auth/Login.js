import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function Login() {
  const [values, setValues] = useState({username: "",password: ""});
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    localStorage.setItem("isAuthenticated", "true");
    navigate('/admin/dashboard')

  };
  const handleChange = (event) => {
    //this console.log message should be removed once you've tested the event works 
    // console.log("handleChange -> " + event.target.name + " : " + event.target.value);
     //this is the important bit
     setValues((values) => ({...values,[event.target.name]: event.target.value,}));
   };


  return (
    <>
    <Header />
    <Form style={myStyle} onSubmit={handleSubmit}>
      <h1>Give your Credentials</h1>
      
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '30%' }}>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" name="username" value={values.username} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicPassword" style={{ width: '30%' }}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange} />
      </Form.Group>
      <Button variant="success" type="submit" style={{ width: '30%' }}>
        Login
      </Button>
    </Form>
    </>
  )

}


const myStyle = {
  display: 'flex',
  justifyContent: "center",
  flexDirection: "column",
  alignItems: 'center'
};



export default Login;