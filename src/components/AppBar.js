import React, { Component } from "react";
import {
    NavLink,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
    Collapse
} from "reactstrap";

class AppBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    UNSAFE_componentWillMount() {
        this.initState()
    }

    initState = async () => {

    }

    render() {
        let {history}=this.props;
        return (
            <>
                <div className="header-2">
                    <Navbar className="navbar-transparent bg-info navbar-absolute" expand="lg" >
                        <Container>
                            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                                GET MY ROLE MODEL
                            </NavbarBrand>
                            <Collapse navbar >
                                <Nav className="mx-auto navbar-nav" navbar>
                                    <NavItem >
                                        <NavLink onClick={(e) => history.push('/')} style={{cursor:'pointer'}}>Admin</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink onClick={(e) => history.push('/tag')} style={{cursor:'pointer'}}>Tag  Management</NavLink>
                                    </NavItem>
                                </Nav>
                                <Nav className="nav navbar-right" navbar>
                                    <NavItem>
                                        <NavLink href="https://twitter.com/CreativeTim?ref=creativetim" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://www.facebook.com/CreativeTim?ref=creativetim" target="_blank">
                                            <i className="fab fa-facebook-square"></i>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                                            target="_blank"
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
        );
    }
}

export default AppBar;
