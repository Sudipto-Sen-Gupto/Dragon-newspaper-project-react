import React, { use } from 'react';
import { NavLink } from 'react-router';

const category=fetch('/categories.json').then(res=>res.json())

const Category = () => {
    const data=use(category);
    console.log(data);
    return (
        <div>
            <h1 className='text-[22px] font-semibold'>All Categories ({data.length})</h1>
            <div className='grid columns-1 my-4 '>
                {
                    data.map(cat=><NavLink key={cat.id} to={`category/${cat.id}`} className={"my-2 btn bg-white border-0 hover:bg-base-300"}>{cat.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;