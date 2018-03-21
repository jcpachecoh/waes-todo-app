import * as React from 'react';
import '../App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';

export interface HeaderProps {
    setShowModalTask: Function;
}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#" onClick={() => this.props.setShowModalTask(true)}>
                            <Glyphicon glyph="plus" /> Add Task
                    </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                    </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} >Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}