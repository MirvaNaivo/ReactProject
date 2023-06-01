import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const AddDog = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [breed, setBreed] = useState("");
    const [gender, setGender] = useState("");
    const [info, setInfo] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const clearForm = () => {
        setName("");
        setAge("");
        setBreed("");
        setGender("");
        setInfo("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let d = {
            name: name,
            age: age,
            breed: breed,
            gender: gender,
            info: info
        }

        fetch("http://localhost:3030/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(d)
        })

        handleShow(true);
        clearForm();
    }

    return (
        <Container>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="#home">Doggy Daycare</Navbar.Brand>
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

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formAddDog">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                    <Form.Label>Breed</Form.Label>
                    <Form.Control type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                    <Form.Label>Info</Form.Label>
                    <Form.Control as="textarea" rows={3} value={info} onChange={(e) => setInfo(e.target.value)} />
                    <Button type="submit" variant="dark">Save</Button>
                </Form.Group>
            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>
                <Modal.Body>New dog added successfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export { AddDog } 