import React from 'react';
import Header from '../../component/header/Header';
import { NavLink, Outlet } from 'react-router';
import github from "../../assets/user.png"
import Marquee from 'react-fast-marquee';
const Homelayout = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
          <header>
              <Header></Header>
              <section className='flex items-center text-center bg-base-300 p-4 gap-5'>
                <p className='bg-secondary text-white p-3'>Latest</p>
              <Marquee pauseOnHover={true} >
                <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
              </Marquee>
              </section>
              <section className='flex justify-between items-center my-10 p-3'>
                <div className='nav-start'></div>
                <nav className='nav-main flex gap-4 text-base-200'>
                  <NavLink to={'/'}>Home</NavLink>
                  <NavLink to={'about'}>About</NavLink>
                  <NavLink to={'career'}>Career</NavLink>
                </nav>
                <div className='nav-end flex gap-2'>
                  <img src={github} alt="" />
                  <button className='btn btn-primary'>Log in</button>
                </div>
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