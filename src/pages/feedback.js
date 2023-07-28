import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';

const Feedback = () => {
    const [feedback, setFeedback] = useState([]);
    const [name, setName] = useState([]);

    const submitButtonClicked = () => {
        let f = {
            name: name,
            feedback: feedback
        }

        setFeedback([...feedback, f]);
    }

    return (
        <Container>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="/">Doggy Daycare</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/schedule">Schedule</Nav.Link>
                        <NavDropdown title="Options" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/add">Add new dog</NavDropdown.Item>
                            <NavDropdown.Item href="/remove">Remove dog from the list</NavDropdown.Item>
                            <NavDropdown.Item href="/edit">Edit dogs information</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/feedback">
                                Feedback
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Form>
                <h4>Give us feedback regarding doggy daycares online scheduling system!</h4>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <Form.Label>Your feedback</Form.Label>
                <Form.Control as="textarea" rows={6} value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                <Button variant="dark" type="submit" onClick={(e) => submitButtonClicked}>Submit</Button>
            </Form>
        </Container>
    )
}

export { Feedback }