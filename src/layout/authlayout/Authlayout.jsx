import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import { Outlet } from 'react-router';

const Authlayout = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
            <header>
                  <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
           
        </div>
    );
};

export default Authlayout;