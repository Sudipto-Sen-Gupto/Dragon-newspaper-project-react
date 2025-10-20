import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const Categorynews = () => {
    const {id}=useParams();
    const news=useLoaderData();
    // const Id=Number (id);
    // console.log(Id);
    const [khobor,setKhobor]=useState([]);
    useEffect(()=>{
        if(id=="0"){
            setKhobor(news)
            return
        }
        else if(id=="1"){
            const filterd=news.map(f=>f.others.is_today_pick===true);
            setKhobor(filterd)
            
        }
        else{
            const filterd=news.filter(f=>f.category_id==id);
        setKhobor(filterd);
        }
    },[news,id])

    return (
        <div>
          <h1>Total {khobor.length} news found</h1>
        </div>
    );
};

export default Categorynews;