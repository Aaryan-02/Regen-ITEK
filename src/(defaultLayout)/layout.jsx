import React from 'react';
import Header4 from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import CalendlyWidget from '../Components/CalendlyWidget/CalendlyWidget';

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
            <Header4></Header4>
            {children}
            <CalendlyWidget />
            <Footer></Footer>
        </div>
    );
};

export default DefalultLayout;