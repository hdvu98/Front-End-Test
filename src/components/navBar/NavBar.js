import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { HEADER_LOGO } from '../../commons/images';
import { NAVBAR as navItems } from '../../commons/nav';
import './styles.scss';
class NavBar extends Component {
    render() {
        return (
            <Navbar className="my-navbar" expand="md">
                <Container fluid="md">
                <Navbar.Brand href="/" className="nav-branch">
                    <img src={HEADER_LOGO} className="img-fluid" alt="cinnamon ai" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {
                            navItems.map((item, index) =>
                                <li key={`nav_bar_${index}`}>
                                    <NavLink to={item.link} 
                                    className="nav-link"
                                    exact={true}
                                    activeClassName="active">{item.name}</NavLink>
                                </li>)
                        }
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
export default NavBar;