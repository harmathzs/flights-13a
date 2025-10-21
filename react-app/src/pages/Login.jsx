import { Component } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
export default class Login extends Component {
    render() {
        return (
            <Card>
                <LoginForm onLogin={this.props.onLogin} />
            </Card>
        )
    }
}