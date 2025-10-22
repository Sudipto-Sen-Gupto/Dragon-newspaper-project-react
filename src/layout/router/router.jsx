import React from 'react';
import { createBrowserRouter } from 'react-router';
import Homelayout from '../homelayout/Homelayout';
import Home from '../../component/home/Home';
import Category from '../../component/category/Category';
import Categorynews from '../../pages/categorynews/Categorynews';
import Authlayout from '../authlayout/Authlayout';
import Login from '../../pages/login/Login';
import Register from '../../pages/login/register/Register';
import Newsdetail from '../../pages/Newsdetail/Newsdetail';
export const router = createBrowserRouter([
    {
           path:'/',
           Component:Homelayout,
           children:[
            {
                index:true,
                Component:Home
            },{
                path:"/category/:id",
                loader:()=>fetch('/news.json'),
                Component:Categorynews
            }
           ],       
    },
    {
        path:'/auth',
        Component:Authlayout,
        children:[
            {
                index:true,
                Component:Login
            },
            {
                path:'register',
                Component:Register
            },
            
         ]

    },{
                path:'/newsDetail',
                Component:Newsdetail
            }

])
   