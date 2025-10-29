import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../auth.init';

export  const AuthContext=createContext();
const Authprovider = ({children}) => {
  
    const [detail,setDetail]=useState(null);
    // console.log(detail);
    const [loader,setLoader]=useState(true)
    useEffect(()=>{
        const unsubscriber=onAuthStateChanged(auth,(currentUser)=>{
            setDetail(currentUser)
            setLoader(false)
        })
        return()=>{
                 unsubscriber();
        }
    },[])
    const createUser=(email,pass)=>{
        setLoader(true)
         return   createUserWithEmailAndPassword(auth,email,pass)
          
    }
  
    const updateUser=(updateData)=>{
          return  updateProfile(auth.currentUser,updateData)
    }
    const userLogin=(email,pass)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,pass);
    }

    const logOut=()=>{
        return signOut(auth);
    }
    
    const authUser={
        detail,
        setDetail,
        createUser,
        logOut,userLogin,loader,setLoader,updateUser
    }
    return <AuthContext value={authUser}>{children}</AuthContext>
        
};

export default Authprovider;