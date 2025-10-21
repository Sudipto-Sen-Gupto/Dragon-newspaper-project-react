import React from 'react';
import Header from '../../component/header/Header';
import { NavLink, Outlet } from 'react-router';
import Marqueee from '../../component/marquee/Marquee';
import Navbar from '../../component/navbar/Navbar';
import Leftaside from '../../component/left/Leftaside';
import Rightaside from '../../component/rigtaside/Rightaside';

const Homelayout = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
          <header >
              <Header></Header>
              <Marqueee></Marqueee>
              <Navbar></Navbar>
              
          </header>
         

          <main className='grid grid-cols-12 '>
           
              <aside className='left col-span-3 sticky top-5 h-fit'>
                <Leftaside></Leftaside>
              </aside>
           
            <section className='main col-span-6'> 
                <Outlet></Outlet>
            </section>
            <aside className='right col-span-3 sticky top-0 h-fit'>
             <Rightaside></Rightaside>
            </aside>
          </main>
        </div>
    );
};

export default Homelayout;