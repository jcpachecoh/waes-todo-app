import * as React from 'react';
import '../App.css';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

export interface HeaderProps {
    setShowModalTask: Function;
    showAll: Function;
    showActive: Function;
    showCompleted: Function;
    logOut: Function;
}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">Todo App</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#" onClick={() => this.props.setShowModalTask(true)}>
                            <Glyphicon glyph="plus" /> Add Task
                        </NavItem>
                        <NavItem eventKey={1} href="#" onClick={() => this.props.showAll()}>
                            <Glyphicon glyph="list" /> Show All
                        </NavItem>
                        <NavItem eventKey={1} href="#" onClick={() => this.props.showActive()}>
                            <Glyphicon glyph="ok" /> ShowActive
                        </NavItem>
                        <NavItem eventKey={1} href="#" onClick={() => this.props.showCompleted()}>
                            <Glyphicon glyph="minus" /> ShowCompleted
                        </NavItem>
                    </Nav>
                    <Nav pullRight={true}>
                        <NavItem onClick={() => this.props.logOut()}>
                            LogOut
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}