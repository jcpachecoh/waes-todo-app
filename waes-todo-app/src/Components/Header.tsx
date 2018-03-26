import * as React from 'react';
import '../App.css';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { Label } from 'semantic-ui-react';
import { User } from '../Models/User';

export interface HeaderProps {
    setShowModalTask: Function;
    showAll: Function;
    showActive: Function;
    showCompleted: Function;
    logOut: Function;
    setShowAddList: Function;
    user: User;
}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Todo App</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#" onClick={() => this.props.setShowAddList(true)}>
                            <Glyphicon glyph="plus" /> Add Todo List
                        </NavItem>
                        <NavItem eventKey={1} href="#" onClick={() => this.props.showActive()}>
                            <Glyphicon glyph="ok" /> ShowActive
                        </NavItem>
                        <NavItem eventKey={1} href="#" onClick={() => this.props.showCompleted()}>
                            <Glyphicon glyph="minus" /> ShowCompleted
                        </NavItem>
                        <NavItem eventKey={1} href="#" onClick={() => this.props.setShowModalTask(true)}>
                            <Glyphicon glyph="plus" /> Add Task
                        </NavItem>
                    </Nav>
                    <Nav pullRight={true}>
                        <Label as="a" color="teal" image={true} className="header-user">
                            <img src="https://cdn0.iconfinder.com/data/icons/avatar-vol-2-4/512/9-48.png" />
                            {this.props.user.username}
                        <Label.Detail onClick={() => this.props.logOut()}>LogOut</Label.Detail>
                        </Label>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}