import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BuyOrBid.css';

const BuyOrBid = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Example total pages

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Add your logic to fetch the data for the selected page
    };

    const carData = Array.from({ length: 8 }, (_, index) => ({
        id: index + 1,
        model: `Car ${index + 1}`,
        location: 'Location XYZ',
        price: 'Price: $12345',
        image: 'https://via.placeholder.com/150', // Placeholder image URL
        bidTime: '59:59 minutes',
    }));

    return (
        <div className="buy-or-bid">
            <div className="page-header">
                <h1>Verified cars</h1>
                <div className="pagination-controls">
                    <button
                        className="pagination-arrow"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        &lt;
                    </button>
                    {[...Array(totalPages).keys()].map(page => (
                        <button
                            key={page + 1}
                            className={`pagination-page ${currentPage === page + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(page + 1)}
                        >
                            {page + 1}
                        </button>
                    ))}
                    <button
                        className="pagination-arrow"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        &gt;
                    </button>
                </div>
            </div>
            <div className="filter-sidebar">
                <h2>Filter</h2>
                <div className="filter-section">
                    <label>Show Results By</label>
                    <button>Add a car</button>
                </div>
                <div className="filter-section">
                    <label>MAKE AND MODEL</label>
                    <input type="text" placeholder="Make and model" />
                </div>
                <div className="filter-section">
                    <label>REGISTRATION</label>
                    <input type="text" placeholder="From" />
                    <input type="text" placeholder="To" />
                </div>
                <div className="filter-section">
                    <label>MILEAGE</label>
                    <input type="text" placeholder="From" />
                    <input type="text" placeholder="To" />
                </div>
                <div className="filter-section">
                    <label>TRANSMISSION</label>
                    <select>
                        <option>Automatic</option>
                        <option>Manual</option>
                    </select>
                </div>
                <div className="filter-section">
                    <label>FUEL</label>
                    <select>
                        <option>Petrol</option>
                        <option>Diesel</option>
                    </select>
                </div>
                <div className="filter-section">
                    <label>POWER</label>
                    <input type="text" placeholder="From" />
                    <input type="text" placeholder="To" />
                </div>
                <div className="filter-section">
                    <label>VEHICLE TYPE</label>
                    <select>
                        <option>4x4</option>
                        <option>Sedan</option>
                        <option>SUV</option>
                    </select>
                </div>
                <div className="filter-section">
                    <label>EXTERIOR COLOR</label>
                    <div className="color-options">
                        <div className="color-option" style={{ backgroundColor: 'red' }}></div>
                        <div className="color-option" style={{ backgroundColor: 'blue' }}></div>
                        <div className="color-option" style={{ backgroundColor: 'green' }}></div>
                        <div className="color-option" style={{ backgroundColor: 'yellow' }}></div>
                        <div className="color-option" style={{ backgroundColor: 'black' }}></div>
                        <div className="color-option" style={{ backgroundColor: 'white' }}></div>
                    </div>
                </div>
                <div className="filter-section">
                    <label>FEATURES</label>
                    <div>
                        <input type="checkbox" id="air-conditioning" />
                        <label htmlFor="air-conditioning">Air conditioning</label>
                    </div>
                    <div>
                        <input type="checkbox" id="navigation" />
                        <label htmlFor="navigation">Navigation</label>
                    </div>
                    <div>
                        <input type="checkbox" id="cruise-control" />
                        <label htmlFor="cruise-control">Cruise control</label>
                    </div>
                    <div>
                        <input type="checkbox" id="heated-seats" />
                        <label htmlFor="heated-seats">Heated seats</label>
                    </div>
                </div>
            </div>
            <div className="car-listing">
                {carData.map(car => (
                    <div key={car.id} className="car-card">
                        <img src={car.image} alt={car.model} />
                        <h3>{car.model}</h3>
                        <p>Location: {car.location}</p>
                        <p>Price: {car.price}</p>
                        <p>Bid end in: {car.bidTime}</p>
                        <Link to="/view-car" className="view-button">View</Link>
                    </div>
                ))}
            </div>
            <div className="pagination-controls">
                <button
                    className="pagination-arrow"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    &lt;
                </button>
                {[...Array(totalPages).keys()].map(page => (
                    <button
                        key={page + 1}
                        className={`pagination-page ${currentPage === page + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(page + 1)}
                    >
                        {page + 1}
                    </button>
                ))}
                <button
                    className="pagination-arrow"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default BuyOrBid;
