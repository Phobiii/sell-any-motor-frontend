import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComprehensiveServices.css';

const ComprehensiveServices = () => {
    return (
        <div className="comprehensive-services">
            <div className="container text-center">
                <h2>Comprehensive services just a few clicks away</h2>
                <p className="subtitle">One-stop solution for all your needs, from the comfort of your home</p>
                <div className="row">
                    <div className="col-md-4">
                        <div className="service-card">
                            <img src="/images/car-inspection.png" alt="Car Inspection" className="service-icon" />
                            <h3>Car Inspection</h3>
                            <ul>
                                <li><span className="check-icon">✔</span> Thorough vehicle check</li>
                                <li><span className="check-icon">✔</span> Qualified mechanics and technicians</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-card">
                            <img src="/images/car-auction.png" alt="Car Auction" className="service-icon" />
                            <h3>Car Auction</h3>
                            <ul>
                                <li><span className="check-icon">✔</span> Fully automated car auction</li>
                                <li><span className="check-icon">✔</span> 100 percent transparency</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-card">
                            <img src="/images/delivery.png" alt="Delivery" className="service-icon" />
                            <h3>Delivery</h3>
                            <ul>
                                <li><span className="check-icon">✔</span> To your doorstep or Pick-up Point</li>
                                <li><span className="check-icon">✔</span> Unbeatable price</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComprehensiveServices;
