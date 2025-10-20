import React from 'react';
import swim from '../../assets/swimming.png'
import play from '../../assets/playground.png'
import classes from '../../assets/class.png'
import bg from '../../assets/bg.png'
const Qzone = () => {
    return (
        <div className='bg-base-300 p-4 my-4'>
            <h1 className='text-[22px] font-semibold'>Q-zone</h1>
            <div className=''>
                <img src={swim} alt="" className='mx-auto'/><img src={classes} alt="" className='mx-auto'/><img src={play} alt="" className='mx-auto'/>
            </div>
            <div className='my-4'>
                <img src={bg} alt="" className='mx-auto' />
            </div>
        </div>
    );
};

export default Qzone;