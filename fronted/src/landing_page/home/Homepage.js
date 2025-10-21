//this is like a wrapper for all comp in home
import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Stats from './Stats';
import Education from './Education';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
         {/* instead of using navbar here we are directly using it in index.js */}
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </>
     );
}

export default HomePage;