import React from 'react';
import './CarDetail.css';

const CarDetail = () => {
    return (
        <div className="car-detail">
            <div className="car-detail-header">
                <h2>1.00 Crore Pkr</h2>
                <div className="bid-info">
                    <p>Highest bid</p>
                    <p className="bid-end">Bids end in 9:53 minutes</p>
                    <p className="location">Location: Lahore</p>
                </div>
                <button className="bid-button">Bid</button>
                <button className="wishlist-button">&#9829;</button>
            </div>
            <div className="car-detail-body">
                <div className="car-image-carousel">
                    <div className="main-image">
                        <img src="/images/car-placeholder.png" alt="Car Main" />
                    </div>
                    <div className="thumbnail-images">
                        <img src="/images/car-placeholder.png" alt="Thumbnail 1" />
                        <img src="/images/car-placeholder.png" alt="Thumbnail 2" />
                        <img src="/images/car-placeholder.png" alt="Thumbnail 3" />
                        <img src="/images/car-placeholder.png" alt="Thumbnail 4" />
                    </div>
                </div>
                <div className="car-specifications">
                    <div className="specification-box">
                        <h3>Engine</h3>
                        <ul>
                            <li>Fuel: Petrol</li>
                            <li>Transmission: Automatic</li>
                            <li>Drive Type: Front 4x2</li>
                            <li>Engine Capacity: 2500 cc</li>
                            <li>Horse Power: 180 hp</li>
                            <li>CO2 Emission: 179 g/km</li>
                        </ul>
                    </div>
                    <div className="specification-box">
                        <h3>Vehicle Condition</h3>
                        <ul>
                            <li>Mileage: 36000 km</li>
                            <li>First Registration: 2022</li>
                            <li>City of Registration: Lahore</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;
