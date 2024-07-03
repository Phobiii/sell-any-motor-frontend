import React from 'react';
import './Sell.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Sell = () => {
    return (
        <Container fluid className="sell-page">
            <Row className="mb-3">
                <Col md={12}>
                    <div className="hero-section">
                        <img src="https://via.placeholder.com/800x400" alt="Sell your car" className="img-fluid" />
                        <div className="hero-text">
                            <h2>SELL YOUR CARS ONLINE WITH EASE</h2>
                            <p>Sell your car online at a great price with Sell Any Motor. It's completely risk-free.</p>
                            <Button variant="warning" className="learn-more-btn">Learn more</Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="advantages-section">
                <Col md={12}>
                    <h3>SELL ANY MOTOR: A partner you can count on</h3>
                </Col>
                <Col md={4}>
                    <Card className="advantage-card">
                        <Card.Body>
                            <Card.Title>Expert car sales</Card.Title>
                            <Card.Text>With more than 20 years of experience, our experts make sure you get the best deal possible.</Card.Text>
                            <img src="https://via.placeholder.com/400x300" alt="Expert car sales" className="img-fluid" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="advantage-card">
                        <Card.Body>
                            <Card.Title>Risk-free sales</Card.Title>
                            <Card.Text>Selling your vehicle is free from obligations and risks. You won't incur any charges until you make a sale.</Card.Text>
                            <img src="https://via.placeholder.com/400x300" alt="Risk-free sales" className="img-fluid" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="advantage-card">
                        <Card.Body>
                            <Card.Title>Great prices</Card.Title>
                            <Card.Text>Your vehicle's condition and market demand help us provide the best price possible for your car.</Card.Text>
                            <img src="https://via.placeholder.com/400x300" alt="Great prices" className="img-fluid" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="advantage-card">
                        <Card.Body>
                            <Card.Title>Quick and easy</Card.Title>
                            <Card.Text>Our streamlined process makes selling your car fast and easy. From inspection to payment, we've got you covered.</Card.Text>
                            <img src="https://via.placeholder.com/400x300" alt="Quick and easy" className="img-fluid" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="inspection-service-section mt-4">
                <Col md={12}>
                    <h3>Car Inspection Service</h3>
                </Col>
                <Col md={4} className="inspection-details">
                    <Card className="service-card">
                        <Card.Body>
                            <h4>Car Inspection Service</h4>
                            <p>Trustworthy</p>
                            <p>Minimal Cost</p>
                            <p>100 percent accuracy</p>
                            <img src="https://via.placeholder.com/400x300" alt="Car Inspection" className="img-fluid" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card className="inspection-form-card">
                        <Card.Body>
                            <h4>Enter Vehicle Details</h4>
                            <form>
                                <Row>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label htmlFor="city">City*</label>
                                            <select className="form-control" id="city">
                                                <option>Select</option>
                                                <option>City 1</option>
                                                <option>City 2</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label htmlFor="carInfo">Car Info*</label>
                                            <input type="text" className="form-control" id="carInfo" placeholder="Make/Model" />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label htmlFor="registeredIn">Registered in*</label>
                                            <select className="form-control" id="registeredIn">
                                                <option>Select</option>
                                                <option>Registered</option>
                                                <option>Un-registered</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label htmlFor="mileage">Mileage*</label>
                                            <input type="text" className="form-control" id="mileage" placeholder="KM" />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label htmlFor="basePrice">Base price*</label>
                                            <input type="text" className="form-control" id="basePrice" placeholder="Pkr" />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label htmlFor="phoneNumber">Phone number*</label>
                                            <input type="text" className="form-control" id="phoneNumber" placeholder="Phone number" />
                                        </div>
                                    </Col>
                                </Row>
                                <Button variant="primary" className="book-inspection-btn">Book Inspection</Button>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Sell;
