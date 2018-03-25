import * as React from 'react';
import '../css/app.css';
import { FormGroup, ControlLabel, FormControl, Button, Form, Alert, PageHeader } from 'react-bootstrap';
import { User } from '../Models/User';
import { queryGetUser } from '../querys/index';
import { request } from 'graphql-request';
import { messages, graphcoolEndpoint } from '../constants/index';

export interface LoginProps {
    user: User;
    handleUsername: Function;
    handlePassword: Function;
    setUserId: Function;
    history: any;
}

export interface LoginState {
    errorLogin: string;
}

export class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: any) {
        super(props);
        this.state = {
            errorLogin: ''
        };
    }

    validateUser() {

        const variables = {
            username: this.props.user.username,
            password: this.props.user.password
        };

        request(graphcoolEndpoint, queryGetUser, variables)
            .then((data: any) => {
                if (data.allUsers.length === 0) {
                    this.setState({
                        errorLogin: messages.messageLogin
                    });
                } else {
                    localStorage.setItem('sessionItemId', data.allUsers[0].id);
                    this.props.history.replace('/todos');
                    this.props.setUserId(data.allUsers[0].id);
                }
            });
    }

    render() {
        return (
            <div className="container">

                <Form horizontal={true} className="form-signin">
                    <PageHeader>
                        Todo App
                    </PageHeader>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            autoFocus={true}
                            type="text"
                            onChange={(e: any) => this.props.handleUsername(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            onChange={(e: any) => this.props.handlePassword(e.target.value)}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block={true}
                        bsSize="large"
                        onClick={() => this.validateUser()}
                    >
                        Login
                    </Button>
                    {this.state.errorLogin &&
                        <Alert bsStyle="warning">
                            {this.state.errorLogin}
                        </Alert>
                    }
                </Form>
            </div>
        );
    }
}