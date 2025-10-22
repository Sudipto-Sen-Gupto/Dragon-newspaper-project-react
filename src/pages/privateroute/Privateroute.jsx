import React, { use } from 'react';
import { AuthContext } from '../../component/authprovider/Authprovider';
import { Navigate } from 'react-router';

const Privateroute = ({children}) => {
    const {detail,loader}=use(AuthContext);
    console.log(detail);
    if(loader){
        return <span class="loading loading-bars loading-xl"></span>
    }
    if(detail && detail?.email){
      
       return children;
        }
   
     return  <Navigate to={'/auth/login'}></Navigate>
      

    
};

export default Privateroute; 