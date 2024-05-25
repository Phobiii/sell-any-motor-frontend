import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './QualityStandards.css';

const QualityStandards = () => {
    return (
        <div className="quality-standards">
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col-md-6 text-left">
                        <h2>WE HAVE ONE STANDARD:<br/>THE HIGHEST</h2>
                        <p>
                            We pride ourselves on our product. It’s also why not every car has what it takes to be our product.<br/>
                            Learn about <a href="#">Sell any Motor quality standards</a>.
                        </p>
                    </div>
                    <div className="col-md-6 position-relative">
                        <img src="/images/quality-car.png" alt="Quality Car" className="img-fluid quality-car-image" />
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
                </div>
            </div>
        </div>
    );
};

export default QualityStandards;
