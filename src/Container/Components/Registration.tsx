import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import axios from "axios";
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userRegistration } from "../api/api";
function Registration() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  let firstNameRef:any= useRef(null);
  let lastNameRef:any=useRef(null);
  let userNameRef:any=useRef(null);
  let passwordRef:any= useRef(null);
  let cityRef:any=useRef(null);
  let stateRef:any=useRef(null);
  let codeRef:any=useRef(null);
  let checkboxRef:any= useRef(null);
  let photoRef:any=useRef(null)


  const handleSubmit = (event: any) => {
    // console.log("EVENT FORM", event.target.form);
    const form = event.currentTarget;

    // console.log("FORM FROM currentTarget",form)
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    
    const formData = {
        firstName: firstNameRef.current?.value,
        lastName: lastNameRef.current?.value,
        userName: userNameRef.current?.value,
        city: cityRef.current?.value,
        state: stateRef.current?.value,
        zipcode: codeRef.current?.value,
        checkbox: checkboxRef.current?.checked,

      };
  
      // console.log('Form Data:', formData);
  };

  let userSignUp= async ()=>{
    const isValid = validateForm();

  if (!isValid) {
    
    return;
  }

    const dataToSend=new FormData();
    dataToSend.append("firstName", firstNameRef.current?.value);
    dataToSend.append("lastName", lastNameRef.current?.value);
    dataToSend.append("userName", userNameRef.current?.value);
    dataToSend.append("password", passwordRef.current?.value);
    dataToSend.append("city", cityRef.current?.value);
    dataToSend.append("state", stateRef.current?.value);
    dataToSend.append("zipcode", codeRef.current?.value);
    dataToSend.append("checkbox", checkboxRef.current?.checked);
    dataToSend.append("profile", photoRef.current?.files[0]);

  try {
    const result = await userRegistration(dataToSend);

    // console.log("Response,",result)
    console.log(result.status);

    if (result.status === "success") {
      // alert("Successfully Registered")
      setShow(true);
    }
  } catch (error) {
    console.log(error)

  }
//     let response = await axios.post("http://localhost:4444/signup", dataToSend);
//     console.log(response.data.status)
// if (response.data.status === "success") {
//   // alert("Successfully Registred")
//   setShow(true)
// }

  }





  const validateForm = () => {
    // Get form input values
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const userName = userNameRef.current?.value;
    const city = cityRef.current?.value;
    const state = stateRef.current?.value;
    const zipcode = codeRef.current?.value;
    const checkbox = checkboxRef.current?.checked;
  
    // Reset previous error messages
    // resetErrorMessages();
  
    // Validate each field
    let isValid = true;
  
    if (!firstName) {
      isValid = false;
      console.log("firstName", "First name is required");
    }
  
    if (!lastName) {
      isValid = false;
      console.log("lastName", "Last name is required");
    }
  
    if (!userName) {
      isValid = false;
      console.log("userName", "Username is required");
    }
  
    if (!city) {
      isValid = false;
      console.log("city", "City is required");
    }
  
    if (!state) {
      isValid = false;
      console.log("state", "State is required");
    }
  
    if (!zipcode) {
      isValid = false;
      console.log("zipcode", "Zip code is required");
    } else if (!/^\d{6}$/.test(zipcode)) {
      isValid = false;
      console.log("zipcode", "Invalid zip code format");
    }
  
    if (!checkbox) {
      isValid = false;
      console.log("checkbox", "Please accept the terms");
    }
  
    return isValid;
  };
  return (
    <div>
      <h1>Registration</h1>
      <Form noValidate validated={validated} onClick={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Siva"
              ref={firstNameRef}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="A"
              ref={lastNameRef}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                ref={userNameRef}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="3">
        <Form.Label>Profile</Form.Label>
        <Form.Control type="file" ref={photoRef} />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Password" ref={passwordRef} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" ref={cityRef} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" ref={stateRef} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" ref={codeRef} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group as={Col} md="3">
          <Form.Check
            required
            ref={checkboxRef}
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        
        
        <Button type="button" onClick={userSignUp}>SignUp</Button> &nbsp;
       
        <Link to="/Login" style={{textDecoration:"none"}}> <Button type="button">Login</Button></Link>

      </Form>
     <ToastContainer position="top-center">
     <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide >
         <Toast.Body className="bg-success position-top-center" style={{color: "white"}}>Successfully Registered</Toast.Body>
       </Toast>
     </ToastContainer>
      

        
    </div>

  );
}

export default Registration;
