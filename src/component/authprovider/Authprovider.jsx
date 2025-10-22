import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../auth.init';
export  const AuthContext=createContext();
const Authprovider = ({children}) => {
  
    const [detail,setDetail]=useState(null);
    console.log(detail);
    useEffect(()=>{
        const unsubscriber=onAuthStateChanged(auth,(currentUser)=>{
            setDetail(currentUser)
        })
        return()=>{
                 unsubscriber();
        }
    },[])
    const createUser=(email,pass)=>{
         return   createUserWithEmailAndPassword(auth,email,pass)
          
    }
    
    const authUser={
        detail,
        setDetail,
        createUser
    }
    return <AuthContext value={authUser}>{children}</AuthContext>
        
};

export default Authprovider;