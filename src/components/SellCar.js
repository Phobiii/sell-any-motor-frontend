import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SellCar.css';

const SellCar = () => {
    return (
        <div className="sell-car-section">
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Sell Car</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Buy Car</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Auction</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Car Inspection</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Car Comparison</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active">
                        <div className="form-background">
                            <h2>Sell your car in 30 minutes</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="licensePlate">License plate</label>
                                    <input type="text" className="form-control" id="licensePlate" placeholder="Enter License plate" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <select className="form-control" id="city">
                                        <option>Select</option>
                                        <option>City 1</option>
                                        <option>City 2</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-success">Continue</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellCar;
