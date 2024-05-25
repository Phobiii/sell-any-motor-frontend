// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SellCar from './components/SellCar';
import SignIn from './components/SignIn';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sell-car" element={<SellCar />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
