import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Linking = () => {
    return (
        <div>
            <h1 className='text-[22px] font-semibold my-5'>Find us on</h1>
            <div class="join join-vertical w-full space-y-4 ">
  <button class="btn btn-outline btn-primary join-item justify-start"><FaFacebook /> Facebook</button>
  <button class="btn btn-outline btn-primary join-item justify-start"><FaTwitter /> Twiter</button>
  <button class="btn btn-outline btn-primary join-item justify-start"><FaInstagram /> Instragram</button>
</div>
        </div>
    );
};

export default Linking;