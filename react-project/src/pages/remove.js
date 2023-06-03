import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';

const Remove = () => {
    const [id, setId] = useState([]);
    const [name, setName] = useState([]);
    const [age, setAge] = useState([]);
    const [breed, setBreed] = useState([]);
    const [gender, setGender] = useState([]);
    const [info, setInfo] = useState([]);
    const [dog, setDog] = useState([]);
    const [dogs, setDogs] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const clearForm = () => {
        setId("");
        setName("");
        setAge("");
        setBreed("");
        setGender("");
        setInfo("");
    }

    useEffect(() => {
        const getDog = async () => {
            let response = await fetch("http://localhost:3030/dogs?");
            setDogs(await response.json());
        }

        getDog();
    },

        []);

    const getDog = (id) => {
        fetch("http://localhost:3030/dogs?id=" + id)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDog(data)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let d = {
            id: id,
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

            <Form onSubmit={handleSubmit}>
                <Form.Select onChange={(e) => getDog(e.target.value)}>
                    <option>Choose a dog</option>
                    {dogs.map((d, index) => {
                        return <option key={index} value={d.id}>{d.name}</option>
                    })}
                </Form.Select>
                <Form.Group className="mb-3" controlId="formEditDog">
                    {dog.map((item, i) => {
                        return <div key={i}>
                            <Form.Label>Remove this dog from the database:</Form.Label>
                            <Form.Control type="text" key={1} value={item.name} onChange={(e) => setName(e.target.value)} />
                            <Form.Control type="text" key={2} value={item.age} onChange={(e) => setAge(e.target.value)} />
                            <Form.Control type="text" key={3} value={item.breed} onChange={(e) => setBreed(e.target.value)} />
                            <Form.Control type="text" key={4} value={item.gender} onChange={(e) => setGender(e.target.value)} />
                            <Form.Control as="textarea" rows={3} key={5} value={item.info} onChange={(e) => setInfo(e.target.value)} />
                            <Button type="submit" variant="dark">Remove</Button>
                        </div>
                    })}
                </Form.Group>
            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>
                <Modal.Body>The dog was removed from the database.</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export { Remove }