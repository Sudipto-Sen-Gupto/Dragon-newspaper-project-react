import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import News from '../news/News';

const Categorynews = () => {
    const {id}=useParams();
    const news=useLoaderData();
    // const Id=Number (id);
    // console.log(Id);
    const [khobor,setKhobor]=useState([]);
    useEffect(()=>{
        if(id=="0"){
            console.log(news);
            setKhobor(news)
            
        }
        else if(id=="1"){
            const filterd=news.filter(f=>f.others.is_today_pick!==false);
            console.log(filterd);
            setKhobor(filterd)
            
        }
        else{
            const filterd=news.filter(f=>f.category_id==id);
            console.log(filterd);
        setKhobor(filterd);
        }
    },[news,id])

    return (
        <div>
          <h1 className='text-[22px] font-semibold'>Total {khobor.length} news found</h1>
          <div className='grid grid-cols-1 p-5'>
            {
                khobor.map(data=><News key={data.id} data={data}></News>)
            }
          </div>
        </div>
    );
};

export default Categorynews;