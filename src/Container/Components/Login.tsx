import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useRef } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { userLoginAPI } from '../api/api';

import { useDispatch } from 'react-redux/es/exports';

function Login() {
  let navigate= useNavigate()
  let emailRef:any= useRef(null);
  let passwordRef:any= useRef(null);
  let dispatch= useDispatch();
  let userLogin = async () =>{
    let dataToAppend=new FormData();
    dataToAppend.append("email", emailRef.current?.value);
    dataToAppend.append("password", passwordRef.current?.value);
    let result= await userLoginAPI(dataToAppend);
    if(result.status === 'success'){
       dispatch({type:"loginData", data:result.details})
       navigate('/home', {state:result.details})
    }
    else if(result.status === 'failed'){
      alert(result.details)
    }
  
  }
  return (
    <div>
      <h1>Login</h1>
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" ref={emailRef} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" ref={passwordRef} />
        </Col>
      </Form.Group>
      

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="button" onClick={userLogin} >Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
    
    </div>
  )
}

export default Login