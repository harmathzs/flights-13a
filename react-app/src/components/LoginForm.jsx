import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

export default function LoginForm(props) {
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
        .then(res=>{
            if (res.ok) {
                // TODO - call grandparent state set function
            }
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
        </>
    )
}