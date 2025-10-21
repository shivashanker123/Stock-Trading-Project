import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row '>
            <div className='col-6 p-5'>
                <img src='media/images/largestBroker.svg'/>
            </div>
            <div className='col-6 py-5 px-4'>
                <h1 className='mt-5'>Largest stock broker in India</h1>
                <p >2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                <div className='row mt-5'>
                    <div className='col-6'>
                    <ul>
                        <li>Futures and Options</li>
                        <li>Commodity derivatives</li>
                        <li>Currently derivatives</li>
                    </ul>
                </div>
                <div className='col-6'>
                    <ul>
                        <li>Stocks & IPOS</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and Govt. Securities</li>
                    </ul>
                </div>
                </div>
            <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
            </div>
            </div>
        </div>
     );
}

export default Awards;