import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

export default function LoginForm(props) {
    const handleLogin = e => {
        e.preventDefault()
        console.log('handleLogin e.target', e.target)
    }

    return (
        <>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="loginForm.email">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="loginForm.password">
                    <Form.Label>Password </Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Button variant="primary" type="submit">Login now</Button>
            </Form>
        </>
    )
}