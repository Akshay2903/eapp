import { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav, Navbar } from 'react-bootstrap';

const cartElements = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    },
];

function Cart() {
    const [items, setItems] = useState(cartElements);

    const handleRemove = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto" style={{ margin: '0 auto', textAlign: 'center', fontSize: '1.5em'}}>
                        <Nav.Link href="#" style={{ color: '#fff' }}>Home</Nav.Link>
                        <Nav.Link href="#" style={{ color: '#fff' }}>Store</Nav.Link>
                        <Nav.Link href="#" style={{ color: '#fff' }}>About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary">Cart ({items.length})</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Card style = {{backgroundColor: 'greencyan'}}>
                    <Card.Body>
                        <Card.Title style = {{textAlign: 'center', fontSize: '4.5em'}}>
                            My Generics
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Container>
            <div className="cart-container">
                <Container >
                    <Row>
                        {items.map((item, index) => (
                            <Col md={6} key={index}>
                                <Card style = {{width: '18rem', margin: '1rem' }}>
                                    <Card.Img variant="top" src={item.imageUrl} style={{ width: '15rem', height: '12rem', margin: '1rem auto'}} className="mx-auto d-block"/>
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>Price: ${item.price}</Card.Text>
                                        <Card.Text>Quantity: {item.quantity}</Card.Text>
                                        <Button variant="danger" onClick={() => handleRemove(index)}>
                                            Remove
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Cart;
