import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SellCar from './components/SellCar';
import SignIn from './components/SignIn';
import Register from './components/Register';
import BuyOrBid from './components/BuyOrBid';
import Footer from './components/Footer';
import ViewCar from './components/ViewCar';
import Sell from './components/Sell'; // Import the Sell component

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sell-car" element={<SellCar />} />
                <Route path="/sell" element={<Sell />} /> {/* Add the Sell route */}
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/buy-or-bid" element={<BuyOrBid />} />
                <Route path="/view-car" element={<ViewCar />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
