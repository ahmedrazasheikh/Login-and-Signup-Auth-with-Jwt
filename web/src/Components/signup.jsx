import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const Signup = () => {
  return (
    <div    style={{"display" : "flex" , "flexDirection" : "column" , "alignItems" : "center"}} >
        <h1  className="text-3xl font-bold underline" >Signup Form!!</h1>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>First Name </Form.Label>
        <Form.Control  style={{"maxWidth"  : "900px"}}  type="text" placeholder="Enter  Your First Name " />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText2">
        <Form.Label>Last Name </Form.Label>
        <Form.Control type="text"  style={{"maxWidth"  : "600px"}} placeholder="Enter  Your Last Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"  style={{"maxWidth"  : "600px"}} placeholder="Enter  Your Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  style={{"maxWidth"  : "600px"}} placeholder="Enter  Your Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Signup
