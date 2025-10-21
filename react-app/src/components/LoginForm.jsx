import React, { useState } from "react";
import { Card, Form, Row, Col, Button, Toast } from "react-bootstrap";

export default function LoginForm({onLogin}) {
    const [showToast, setShowToast] = useState(false)

    const handleLogin = e => {
        e.preventDefault()
        let {email, password} = e.currentTarget.elements
        email = email.value
        password = password.value
        // console.log('email', email) // ok :) 
        fetch('http://localhost:3333/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        .then(res=>res.json())
        .then(res=>{
            //console.log('res', res)
            if (res.result.length>=1) onLogin()
            else setShowToast(true)
        })
        .catch(console.warn)
    }

    return (
        <>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="loginForm.email">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" name="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="loginForm.password">
                    <Form.Label>Password </Form.Label>
                    <Form.Control type="password" name="password" />
                </Form.Group>
                <Button variant="primary" type="submit">Login now</Button>
            </Form>

            <Toast style={{marginTop: '10px'}} show={showToast}>
                <Toast.Header>
                    <strong className="me-auto">Login failure</strong>
                    <small>now</small>
                </Toast.Header>
                <Toast.Body>Please login with registered email and password.</Toast.Body>
            </Toast>
        </>
    )
}