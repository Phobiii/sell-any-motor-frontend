import React from 'react';
import './ViewCar.css';
import { Container, Row, Col, Card, Button, Badge, Table } from 'react-bootstrap';

const ViewCar = () => {
    return (
        <Container fluid className="view-car-container">
            <Row>
                <Col md={2} className="sidebar">
                    <nav>
                        <ul className="nav flex-column">
                            <li className="nav-item"><a href="/home" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="/buy" className="nav-link">Buy</a></li>
                            <li className="nav-item"><a href="/sell" className="nav-link">Sell</a></li>
                            <li className="nav-item"><a href="/blogs" className="nav-link">Blogs</a></li>
                            <li className="nav-item"><a href="/account" className="nav-link">Account</a></li>
                            <li className="nav-item"><a href="/support" className="nav-link">Support</a></li>
                        </ul>
                    </nav>
                </Col>
                <Col md={10} className="main-content">
                    <Row className="mb-3">
                        <Col md={8}>
                            <Button variant="link" href="/buy">&lt; Back to results</Button>
                            <h2>Example Car 1</h2>
                            <Card className="car-image">
                                <Card.Img variant="top" src="https://via.placeholder.com/800x400" />
                                <Card.ImgOverlay className="d-flex justify-content-between align-items-center">
                                    <Button variant="light" className="carousel-control-prev">
                                        <span>&lt;</span>
                                    </Button>
                                    <Button variant="light" className="carousel-control-next">
                                        <span>&gt;</span>
                                    </Button>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <h4>Highest bid</h4>
                            <h2 className="text-primary">1.00 Crore PKR</h2>
                            <Badge bg="success">Bids end in 9:53 minutes</Badge>
                            <div className="bid-section mt-3">
                                <Button variant="warning" className="btn-bid">Bid</Button>
                            </div>
                            <div className="car-details mt-4">
                                <p><strong>Location:</strong> Lahore</p>
                                <p><strong>Mileage:</strong> 1500 km</p>
                                <p><strong>First registration:</strong> 2/2022</p>
                                <p><strong>Transmission:</strong> Automatic</p>
                                <p><strong>Power:</strong> 180 hp</p>
                                <p><strong>Fuel:</strong> Petrol</p>
                                <p><strong>Drive type:</strong> front 4x2</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="thumbnail-images">
                            <Row>
                                <Col><img src="https://via.placeholder.com/150" alt="Thumbnail 1" className="img-thumbnail" /></Col>
                                <Col><img src="https://via.placeholder.com/150" alt="Thumbnail 2" className="img-thumbnail" /></Col>
                                <Col><img src="https://via.placeholder.com/150" alt="Thumbnail 3" className="img-thumbnail" /></Col>
                                <Col><img src="https://via.placeholder.com/150" alt="Thumbnail 4" className="img-thumbnail" /></Col>
                            </Row>
                        </Col>
                        <Col md={4} className="details-nav">
                            <nav>
                                <ul className="nav flex-column">
                                    <li className="nav-item"><a href="#details" className="nav-link active">Details</a></li>
                                    <li className="nav-item"><a href="#features" className="nav-link">Features</a></li>
                                    <li className="nav-item"><a href="#inspection" className="nav-link">Inspection</a></li>
                                </ul>
                            </nav>
                        </Col>
                    </Row>
                    <Row className="details-section mt-4">
                        <Col md={12}>
                            <h3>Details</h3>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>ENGINE</Card.Title>
                                    <Table borderless>
                                        <tbody>
                                            <tr><td>Fuel</td><td>Petrol</td></tr>
                                            <tr><td>Transmission</td><td>Automatic</td></tr>
                                            <tr><td>Drive type</td><td>front 4x2</td></tr>
                                            <tr><td>Engine capacity</td><td>2500</td></tr>
                                            <tr><td>Initial torque</td><td>232 Nm</td></tr>
                                            <tr><td>Horse power</td><td>180 hp</td></tr>
                                            <tr><td>CO2 emission</td><td>179 g/km</td></tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>VEHICLE CONDITION</Card.Title>
                                    <Table borderless>
                                        <tbody>
                                            <tr><td>Mileage</td><td>36000</td></tr>
                                            <tr><td>First registration</td><td>2/2022</td></tr>
                                            <tr><td>City of registration</td><td>Lahore</td></tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>VEHICLE DETAIL</Card.Title>
                                    <Table borderless>
                                        <tbody>
                                            <tr><td>Make</td><td>Hyundai</td></tr>
                                            <tr><td>Model</td><td>Sonata 2.5</td></tr>
                                            <tr><td>Body color</td><td>Grey</td></tr>
                                            <tr><td>Type of finish</td><td>Metallic</td></tr>
                                            <tr><td>Interior color</td><td>Beige</td></tr>
                                            <tr><td>Interior material</td><td>Faux leather material</td></tr>
                                            <tr><td>Body</td><td>Sedan</td></tr>
                                            <tr><td>Doors</td><td>4/5 doors</td></tr>
                                            <tr><td>Seats</td><td>5</td></tr>
                                            <tr><td>VIN</td><td>******************</td></tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="features-section mt-4">
                        <Col md={12}>
                            <h3>Features</h3>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>MULTIMEDIA</Card.Title>
                                    <ul className="features-list">
                                        <li>Bluetooth</li>
                                        <li>DAB radio</li>
                                        <li>Voice control</li>
                                        <li>Integrated music streaming</li>
                                        <li>Navigation system</li>
                                        <li>USB</li>
                                        <li>Touch screen</li>
                                        <li>Android Auto</li>
                                        <li>On-board computer</li>
                                        <li>MP3 interface</li>
                                        <li>Apple CarPlay</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>INTERIOR EQUIPMENT</Card.Title>
                                    <ul className="features-list">
                                        <li>Heated steering wheel</li>
                                        <li>Armrest front</li>
                                        <li>Heated front seats</li>
                                        <li>Leather steering wheel</li>
                                        <li>Multifunctional steering wheel</li>
                                        <li>Rear seats ISOFIX points</li>
                                        <li>Divided rear seats</li>
                                        <li>Ventilated front seats</li>
                                        <li>Electric adjustable front seats</li>
                                        <li>Automatic 2-zone air conditioning</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>SECURITY AND STABILIZATION SYSTEMS</Card.Title>
                                    <ul className="features-list">
                                        <li>ESP</li>
                                        <li>Front collision warning system</li>
                                        <li>Parking assist system self-steering</li>
                                        <li>Automatic parking brake</li>
                                        <li>Keyless start</li>
                                        <li>Blind spot assist</li>
                                        <li>360° parking camera</li>
                                        <li>Front and rear parking sensors</li>
                                        <li>Tire pressure monitoring system</li>
                                        <li>Adaptive cruise control</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>EXTERIOR EQUIPMENT</Card.Title>
                                    <ul className="features-list">
                                        <li>Alloy wheels</li>
                                        <li>High beam assist</li>
                                        <li>Electric tailgate</li>
                                        <li>Light sensor</li>
                                        <li>Dynamic running lights</li>
                                        <li>Front fog lights</li>
                                        <li>Rain sensor</li>
                                        <li>Front electric windows</li>
                                        <li>LED headlights</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>VEHICLE DRIVETRAIN</Card.Title>
                                    <ul className="features-list">
                                        <li>Paddle shifter</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="inspection-section mt-4">
                        <Col md={12}>
                            <h3>Inspection Sheet</h3>
                        </Col>
                        <Col md={4}>
                            <h4>Normal damage</h4>
                            <ul className="damage-list">
                                <li>1. Front Bumper: Scratch</li>
                                <li>2. Hood/Bonnet: Scratch</li>
                                <li>3. Windshield/Windscreen: Chip</li>
                                <li>4. Left Headlight: Other</li>
                                <li>5. Front Left Fender/Wing: Scratch</li>
                                <li>6. Front Left Door: Scratch</li>
                                <li>7. Rear Bumper: Scratch</li>
                                <li>8. Tailgate: Scratch</li>
                                <li>9. Right Quarter Panel: Scratch</li>
                                <li>10. Rear Right Door: Scratch</li>
                                <li>11. Front Right Door: Scratch</li>
                                <li>12. Right A-Pillar: Scratch</li>
                                <li>13. Right Headlight: Other</li>
                            </ul>
                            <h4>Special damages</h4>
                            <ul className="damage-list">
                                <li>Alloy wheels scratched</li>
                                <li>Unclean interior</li>
                            </ul>
                        </Col>
                        <Col md={8}>
                            <Card>
                                <Card.Body>
                                    <Card.Img src="https://via.placeholder.com/600x400?text=Damage+Locations" alt="Damage Locations" />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="comparison-section mt-4">
                        <Col md={12}>
                            <h3>Car Comparison</h3>
                        </Col>
                        <Col md={6}>
                            <Card className="comparison-card">
                                <Card.Body>
                                    <Row>
                                        <Col xs={2}>
                                            <div className="comparison-indicator bg-warning"></div>
                                        </Col>
                                        <Col xs={10}>
                                            <h5>COMPARED WITH</h5>
                                        </Col>
                                    </Row>
                                    <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
                                    <Card.Title>Example Car 1</Card.Title>
                                    <h4 className="text-success">99 lakh PKR</h4>
                                    <Badge bg="warning">3:22 minutes</Badge>
                                    <p className="text-muted">Remaining Time</p>
                                    <Table borderless>
                                        <tbody>
                                            <tr><td>Mileage</td><td>5200 km</td></tr>
                                            <tr><td>First registration</td><td>1/2022</td></tr>
                                            <tr><td>Transmission</td><td>Automatic</td></tr>
                                            <tr><td>Fuel</td><td>Petrol</td></tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="comparison-card">
                                <Card.Body>
                                    <Row>
                                        <Col xs={2}>
                                            <div className="comparison-indicator bg-primary"></div>
                                        </Col>
                                        <Col xs={10}>
                                            <h5>YOUR CHOSEN CAR</h5>
                                        </Col>
                                    </Row>
                                    <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
                                    <Card.Title>Example Car 2</Card.Title>
                                    <h4 className="text-success">1.00 Crore PKR</h4>
                                    <Badge bg="warning">9:53 minutes</Badge>
                                    <p className="text-muted">Remaining Time</p>
                                    <Table borderless>
                                        <tbody>
                                            <tr><td>Mileage</td><td>1500 km</td></tr>
                                            <tr><td>First registration</td><td>2/2022</td></tr>
                                            <tr><td>Transmission</td><td>Automatic</td></tr>
                                            <tr><td>Fuel</td><td>Petrol</td></tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ViewCar;
