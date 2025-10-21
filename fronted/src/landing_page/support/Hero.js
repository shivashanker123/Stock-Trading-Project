import React from 'react';
import '../../index.css';


function Hero() {
    return ( 
        <section className='container-fluid ' id='supportHero'>
            <div className='p-5 mx-4' id='supportWrapper'>
                <h5>Support Portal</h5>
                <a href='' style={{color:"white"}}>Track Tickets</a>
            </div>
            <div className='row p-5 pt-0 m-3' >
                <div className='col-6 p-3'>
                    <h1 className='fs-5 mb-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className='mb-3' style={{textAlign:"center", width:"100%",height:"50px",border:"white",borderRadius:"6px"}} placeholder='Eg.how do i activate F&O,why is my order getting rejected..' />
                    <a href='' style={{color:"white"}}>Track account opening</a>&nbsp;&nbsp;
                    <a href='' style={{color:"white"}}>Track segment activation</a>&nbsp;&nbsp;
                    <a href='' style={{color:"white"}}>Intraday.margins</a>&nbsp;&nbsp;
                    <a href='' style={{color:"white"}}>Kite user manual</a>
                </div>
                <div className='col-1'></div>
                <div className='col-5 p-3'>
                    <h1 className='fs-5'>Featured</h1>
                    <ol style={{lineHeight:"30px"}}>
                        <li><a href=''>Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href=''>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
                
            </div>
            
        </section>
     );
}

export default Hero;