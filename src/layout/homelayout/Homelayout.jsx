import React from 'react';
import logo from '../../assets/logo.png'
const Homelayout = () => {
    return (
        <div className='max-w-[1400px] mx-auto text-center my-5'>
            <img src={logo} alt="" className='mx-auto' />
            <h1>The Dragon newspaper</h1>
        </div>
    );
};

export default Homelayout;