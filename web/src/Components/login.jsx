import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const Login = () => {
  return (
    <div  style={{"display" : "flex" , "flexDirection" : "column" , "alignItems" : "center"}} >
        <h1>Login Form!!</h1>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  style={{"maxWidth"  : "900px"}}  type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  style={{"maxWidth"  : "600px"}} placeholder="Password" />
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

export default Login
