import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom'>
            <div className='row text-center p-5'>
                <h1 className='mt-3'>Technology</h1>
                <h3 className='mt-2 text-muted'>Sleek,modern and intuitive trading platforms</h3>
                <p className='mt-2'>Check out <a href="" style={{ textDecoration: "none" }}>investment offerings<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>         
            </div>
        </div>
     );
}

export default Hero;