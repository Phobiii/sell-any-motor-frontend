import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HelpSection.css';

const HelpSection = () => {
    return (
        <div className="help-section">
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="/images/robot.png" alt="Robot" className="img-fluid robot-image" />
                    </div>
                    <div className="col-md-6">
                        <h2>Need Any Help?</h2>
                        <p>
                            Got questions? Our chatbot is ready to help you navigate Sell Any Motor's online car buying and selling platform. Ask away!
                        </p>
                        <button className="btn btn-orange">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpSection;
