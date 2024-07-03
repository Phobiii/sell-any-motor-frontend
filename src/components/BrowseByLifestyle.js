import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BrowseByLifestyle.css';

const BrowseByLifestyle = () => {
    return (
        <div className="browse-by-lifestyle">
            <div className="background-image">
                <div className="container">
                    <h2 className="text-center">Browse by Lifestyle</h2>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <img src="https://via.placeholder.com/150" alt="Thumbnail 1" className="img-thumbnail" />
                                <div className="card-body">
                                    <h5 className="card-title">Sedan</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src="https://via.placeholder.com/150" alt="Thumbnail 1" className="img-thumbnail" />
                                <div className="card-body">
                                    <h5 className="card-title">SUV</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src="https://via.placeholder.com/150" alt="Thumbnail 1" className="img-thumbnail" />
                                <div className="card-body">
                                    <h5 className="card-title">Family Car</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src="https://via.placeholder.com/150" alt="Thumbnail 1" className="img-thumbnail"/>
                                <div className="card-body">
                                    <h5 className="card-title">Luxury</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary show-all-btn">Show All</button>
                    </div>
                    <p className="main-description">
                        You choose your car online.<br />
                        We inspect it and deliver it.
                    </p>
                    <p className="text-center description">
                        That's why our process is 100% online. We give you the power to control how you buy a car by our fully automated auction system.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BrowseByLifestyle;
