import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

export default function LoginForm(props) {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="loginForm.email">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="loginForm.password">
                    <Form.Label>Password </Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Button variant="primary">Login now</Button>
            </Form>
        </>
    )
}