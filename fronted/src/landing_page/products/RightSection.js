import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6  p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>tryDemo</a>
                        <a href={learnMore} style={{marginLeft:"50px"}}>learnMore</a>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={imageURL} style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;