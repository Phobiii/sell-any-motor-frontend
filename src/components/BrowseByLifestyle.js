import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BrowseByLifestyle.css';

const BrowseByLifestyle = () => {
    return (
        <div className="browse-by-lifestyle">
            <div className="container">
                <h2 className="text-center">Browse by Lifestyle</h2>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://source.unsplash.com/random/400x300?sedan" className="card-img-top" alt="Sedan" />
                            <div className="card-body">
                                <h5 className="card-title">Sedan</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://source.unsplash.com/random/400x300?suv" className="card-img-top" alt="SUV" />
                            <div className="card-body">
                                <h5 className="card-title">SUV</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://source.unsplash.com/random/400x300?family-car" className="card-img-top" alt="Family Car" />
                            <div className="card-body">
                                <h5 className="card-title">Family Car</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://source.unsplash.com/random/400x300?luxury" className="card-img-top" alt="Luxury" />
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
    );
};

export default BrowseByLifestyle;
