import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Linking from '../../pages/rigth-layout/Linking';
import Qzone from '../../pages/Qzone/Qzone';
const Rightaside = () => {
    return (
        <div>
           <h1 className='text-[22px] font-semibold my-3'>Log in with</h1>
           <div className='space-y-4'>
            <button className='btn  btn-outline btn-secondary w-full'><FcGoogle size={30}/> Log in with google </button>
            <button className='btn btn-outline btn-primary w-full'> 
             <FaGithub size={30}/>  Log in with github</button>
           </div>
           <div>
             <Linking></Linking>
             <Qzone></Qzone>
           </div>
        </div>
    );
};

export default Rightaside;