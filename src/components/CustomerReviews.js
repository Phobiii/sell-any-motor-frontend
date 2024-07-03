import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomerReviews.css';

const CustomerReviews = () => {
    return (
        <div className="customer-reviews">
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col-md-4 text-left">
                        <h2>What do our Customers think?</h2>
                        <div className="carousel-controls-container">
                            <div className="carousel-controls">
                                <span className="carousel-control-prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </span>
                                <div className="carousel-indicators">
                                    <span className="dot active"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                                <span className="carousel-control-next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="review-card">
                                    <img src="https://via.placeholder.com/300x200" alt="Thumbnail 1" className="img-thumbnail"/>
                                    <h3>Thomas J.</h3>
                                    <p>Quick and hassle-free sale with Sell Any Motor! Got a great price for my car, and the listing was up in minutes. Definitely recommend to sellers!</p>
                                    <div className="stars">★★★★★</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="review-card">
                                    <img src="https://via.placeholder.com/300x200" alt="Thumbnail 1" className="img-thumbnail"/>
                                    <h3>Usman K.</h3>
                                    <p>Buying a car on Sell Any Motor was a breeze. Easy to navigate and secure - a trustworthy platform for any buyer.</p>
                                    <div className="stars">★★★★★</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;
