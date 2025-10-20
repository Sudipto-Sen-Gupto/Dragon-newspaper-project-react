import React from 'react';
import Marquee from 'react-fast-marquee';
const Marqueee = () => {
    return (
        <div>
            <section className='flex items-center text-center bg-base-300 p-4 gap-5'>
                <p className='bg-secondary text-white p-3'>Latest</p>
               <Marquee pauseOnHover={true} >
                <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
              </Marquee>
              </section>
           
        </div>
    );
};

export default Marqueee;