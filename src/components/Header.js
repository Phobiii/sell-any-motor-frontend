// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Logo</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/buy-or-bid">Buy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sell-car">Sell</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="supportDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Support
                            </a>
                            <div className="dropdown-menu" aria-labelledby="supportDropdown">
                                <Link className="dropdown-item" to="/support/faq">FAQ</Link>
                                <Link className="dropdown-item" to="/support/contact">Contact Us</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="accountDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Account
                            </a>
                            <div className="dropdown-menu" aria-labelledby="accountDropdown">
                                <Link className="dropdown-item" to="/sign-in">Sign In</Link>
                                <Link className="dropdown-item" to="/register">Register</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
