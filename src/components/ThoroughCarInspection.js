import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ThoroughCarInspection.css';

const ThoroughCarInspection = () => {
    return (
        <div className="thorough-car-inspection">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>A thorough car Inspection</h2>
                        <p>
                            A qualified mechanic will thoroughly inspect your chosen car. You will receive a detailed report about the technical condition of the car, photo documentation, and our advice. You just take your time and decide.
                        </p>
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                    <div className="col-md-6">
                        <div className="inspection-card">
                            <img src="https://via.placeholder.com/150" alt="Thumbnail 1" className="img-thumbnail" />
                            <div className="inspection-details">
                                <h5>Škoda Octavia 2.0 TSI DSG RS 180 kW</h5>
                                <ul>
                                    <li>Exterior <span className="inspection-status">●●●●●</span></li>
                                    <li>Interior <span className="inspection-status">●●●●●</span></li>
                                    <li>Engine <span className="inspection-status">●●●●●</span></li>
                                    <li>Chassis <span className="inspection-status">●●●●●</span></li>
                                    <li>Testdrive <span className="inspection-status">●●●●●</span></li>
                                </ul>
                                <p className="inspection-summary">Checked all 270 points</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThoroughCarInspection;
