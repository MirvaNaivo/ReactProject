import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';

const Project = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const getDogs = async () => {
            let response = await fetch("http://localhost:3030/dogs?");
            setDogs(await response.json());
        }

        getDogs();
    },

        []);

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

            <Container>
                <Row>
                    
                </Row>
                <Row>
                    <h1>At the doggy daycare today:</h1>
                    <Table striped bordered hover responsive variant="dark">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Breed</th>
                                <th>Gender</th>
                                <th>Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dogs.map((d, index) => {
                                return <tr key={index}>
                                    <th>{d.name}</th>
                                    <th>{d.age}</th>
                                    <th>{d.breed}</th>
                                    <th>{d.gender}</th>
                                    <th>{d.info}</th>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </Container>
    )
}

export default Project;