import * as React from 'react';
import '../css/app.css';
import { FormGroup, ControlLabel, FormControl, Button, Form, Alert } from 'react-bootstrap';
import { User } from '../Models/User';
import { queryGetUser } from '../querys/index';
import { request } from 'graphql-request';

export interface LoginProps {
    user: User;
    handleUsername: Function;
    handlePassword: Function;
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

        request('https://api.graph.cool/simple/v1/cjeujoqgm10rw0151kql505uu', queryGetUser, variables)
            .then((data: any) => {
                if (data.allUsers.length === 0) {
                    this.setState({
                        errorLogin: 'Username or password is worng, please try again'
                    });
                } else {
                    console.log(data.allUsers.id);
                    localStorage.setItem('sessionItemId', data.allUsers.id);
                }

            });
    }

    render() {
        return (
            <div className="container">
                <Form horizontal={true}>
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