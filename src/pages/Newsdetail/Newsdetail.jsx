import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../../component/header/Header';
import Rightaside from '../../component/rigtaside/Rightaside';
import Newscard from '../newsCard/Newscard';

const Newsdetail = () => {
    const news=useLoaderData();
    const {id}=useParams();
//    console.log(news,id);
   const[data,setData]=useState({});
   useEffect(()=>{
    const newData=news.find(f=>f.id==id);
    setData(newData);
   },[id,data])
    return (
        <div className='max-w-[1400px] mx-auto'>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12'>
                <section className='col-span-9'>
                 <Newscard data={data}></Newscard>
                </section>
                <aside className='col-span-3'>
                    <Rightaside></Rightaside>
                </aside>
            </main>
        </div>
    );
};

export default Newsdetail;