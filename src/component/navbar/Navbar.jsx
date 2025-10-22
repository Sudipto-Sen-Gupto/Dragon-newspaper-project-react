import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import github from "../../assets/user.png"
import { AuthContext } from '../authprovider/Authprovider';

const Navbar = () => {
  const {detail}=use(AuthContext)
    return (
        <div>
            <section className='flex justify-between items-center my-10 p-3'>
                <div className='nav-start'>{
                     detail&& detail.email
                     }</div>
                <nav className='nav-main flex gap-4 text-base-200'>
                     
                  <NavLink to={'/'}>Home</NavLink>
                  <NavLink to={'about'}>About</NavLink>
                  <NavLink to={'career'}>Career</NavLink>
                </nav>
                <div className='nav-end flex gap-2'>
                  <img src={github} alt="" />
                  <Link to={'/auth'}><button className='btn btn-primary'>Log in</button></Link>
                </div>
              </section>
        </div>
    );
};

export default Navbar;