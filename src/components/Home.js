import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import SellCar from './SellCar';
import BrowseByLifestyle from './BrowseByLifestyle';
import FullyAutomatedAuction from './FullyAutomatedAuction';
import ThoroughCarInspection from './ThoroughCarInspection';
import HelpSection from './HelpSection';
import ComprehensiveServices from './ComprehensiveServices';
import QualityStandards from './QualityStandards';
import CustomerReviews from './CustomerReviews';

const Home = () => {
    return (
        <div>
            <SellCar />
            <BrowseByLifestyle />
            <FullyAutomatedAuction />
            <ThoroughCarInspection />
            <HelpSection />
            <ComprehensiveServices />
            <QualityStandards />
            <CustomerReviews />
        </div>
    );
};

export default Home;
