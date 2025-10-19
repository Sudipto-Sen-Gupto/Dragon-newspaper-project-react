import React from 'react';
import Header from '../../component/header/Header';
import { NavLink, Outlet } from 'react-router';
import Marquee from 'react-fast-marquee';
const Homelayout = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
          <header>
              <Header></Header>
              <section className='flex items-center text-center bg-base-300 p-4 gap-5'>
                <p className='bg-secondary text-white p-3'>Latest</p>
              <Marquee pauseOnHover={true} direction='right'>
                <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
              </Marquee>
              </section>
              <section>
                <nav>
                  <NavLink>Home</NavLink>
                  <NavLink>About</NavLink>
                  <NavLink>Career</NavLink>
                </nav>
              </section>
          </header>
         

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