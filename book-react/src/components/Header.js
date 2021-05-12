import React from 'react';
import {Form, FormControl, Nav, Navbar, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Link to="/" className="navbar-brand">홈</Link>
                <Nav className="mr-auto">
                    <Link to="/joinForm" className="nav-link">회원가입</Link>
                    <Link to="/loginForm" className="nav-link">로그인</Link>
                    <Link to="/saveForm" className="nav-link">글쓰기</Link>

                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <br />
        </>
    );
};

export default Header;