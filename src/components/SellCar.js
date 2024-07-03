import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SellCar.css';

const SellCar = () => {
    const [licensePlate, setLicensePlate] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const handleContinue = (e) => {
        e.preventDefault();
        // Perform any necessary validation or API calls here
        // Assuming validation is successful, navigate to the Sell page
        navigate('/sell');
    };

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
                            <form onSubmit={handleContinue}>
                                <div className="form-group">
                                    <label htmlFor="licensePlate">License plate</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="licensePlate"
                                        placeholder="Enter License plate"
                                        value={licensePlate}
                                        onChange={(e) => setLicensePlate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <select
                                        className="form-control"
                                        id="city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        required
                                    >
                                        <option value="" disabled>Select</option>
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
