import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';

const Remove = () => {
    const [id, setId] = useState([]);
    const [name, setName] = useState([]);
    const [age, setAge] = useState([]);
    const [breed, setBreed] = useState([]);
    const [gender, setGender] = useState([]);
    const [info, setInfo] = useState([]);
    const [dog, setDog] = useState([]);

    useEffect(() => {
        const getDog = async () => {
            let response = await fetch("http://localhost:3030/dogs?");
            setDog(await response.json());
        }

        getDog();
    },

        []);


    return(
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
    )
}

export { Remove }