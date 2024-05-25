import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FullyAutomatedAuction.css';

const FullyAutomatedAuction = () => {
    return (
        <div className="fully-automated-auction">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="https://source.unsplash.com/random/600x400?car" alt="Car" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>Fully Automated Car Auction</h2>
                        <p>
                            Our fully automated live bidding system provides you with the feature to sell/buy your car within 30 minutes. 
                            Learn more about our <a href="#">fully automated auction...</a>
                        </p>
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullyAutomatedAuction;
