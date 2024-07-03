// src/components/Register.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

const Register = () => {
    return (
        <div className="register-container">
            <a href="/" className="back-link">&lt; Back to results</a>
            <h2>Register</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" className="form-control" placeholder="Email Address" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Password" />
                </div>
                <h3>Personal Data</h3>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Surname" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone number" />
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="City" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Postal code" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Register</button>
            </form>
        </div>
    );
};

export default Register;
