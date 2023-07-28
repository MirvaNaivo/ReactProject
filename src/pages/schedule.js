import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';

const Schedule = () => {
    const [schedule, setSchedule] = useState([]);
    const [dog, setDog] = useState([]);
    
    useEffect(() => {
        const getSchedules = async () => {
            let response = await fetch("http://localhost:3030/schedules?");
            setSchedule(await response.json());
            getDog(schedule.dogId);
        }

        getSchedules();
    },
        []);

    const getDog = (id) => {
        console.log(id);
        fetch("http://localhost:3030/dogs?id=" + id)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDog(data)
            })
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

        <Table>
            
        </Table>
        

        </Container>
    )
}

export { Schedule }