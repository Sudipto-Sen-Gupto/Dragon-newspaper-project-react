import React from 'react';
import { NavLink } from 'react-router';
import github from "../../assets/user.png"
const Navbar = () => {
    return (
        <div>
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
        </div>
    );
};

export default Navbar;