import React from 'react';
import { createBrowserRouter } from 'react-router';
import Homelayout from '../homelayout/Homelayout';

export const router = createBrowserRouter([
    {
           path:'/',
           Component:Homelayout
    }
])
   