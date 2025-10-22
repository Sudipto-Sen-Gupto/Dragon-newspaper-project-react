import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router';

const Newscard = ({data}) => {
    const{category_id,title,image_url,details}=data;
    return (
        <div className='p-10'>
           
            <img src={image_url} className='w-full' alt="" />
             <h1 className='text-[22px] font-semibold text-center py-5'>{title}</h1>
            <p className='text-base-200 text-justify '>{details}</p>

           <Link to={`/category/${category_id}`}> <button className='btn btn-secondary my-4 '> <BiRightArrow /> All news in the category</button></Link>
        </div>
    );
};

export default Newscard;