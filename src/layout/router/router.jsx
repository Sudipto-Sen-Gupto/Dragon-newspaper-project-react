import React from 'react';
import { createBrowserRouter } from 'react-router';
import Homelayout from '../homelayout/Homelayout';
import Home from '../../component/home/Home';
import Category from '../../component/category/Category';
import Categorynews from '../../pages/categorynews/Categorynews';

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
                Component:Categorynews
            }
           ]
    }
])
   