import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import github from "../../assets/user.png"
import { AuthContext } from '../authprovider/Authprovider';
import button from 'daisyui/components/button';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {detail,logOut}=use(AuthContext)
  const handleOut=()=>{
    logOut().then(res=>toast("Sign Out done")).catch(err=>console.log(err))
  }
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
                  <img src={`${detail? detail.photoURL:github}`} className='w-[50px] rounded-full' alt="" />
                  {
                    detail? <button className='btn btn-primary' onClick={handleOut}>Log out</button> : <Link to={'/auth/login'}><button className='btn btn-primary' >Log in</button></Link>
                  }
                 
                </div>
              </section>
        </div>
    );
};

export default Navbar;