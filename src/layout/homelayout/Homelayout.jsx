import React from 'react';
import Header from '../../component/header/Header';
import { Outlet } from 'react-router';
const Homelayout = () => {
    return (
        <div>
          <Header></Header>

          <main>
            <section className='left_nav'></section>
            <section className='main'> 
                <Outlet></Outlet>
            </section>
            <section className='right-nav'></section>
          </main>
        </div>
    );
};

export default Homelayout;