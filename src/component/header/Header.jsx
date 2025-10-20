import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='max-w-[1400px] mx-auto text-center my-5'>
            <img src={logo} alt="" className='mx-auto' />
            <h1 className='text-base-200 my-4'>Journalism Without Fear or Favour</h1>
            <p>{format(new Date(),"EEEE ,MMMM d,yyy")}</p>
            
           
        </div>
    );
};

export default Header;