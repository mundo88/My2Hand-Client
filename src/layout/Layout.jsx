import React from 'react';
import { Outlet} from "react-router-dom";
// import Button from '../components/Button';
// import { RiMessengerFill} from "react-icons/ri";

import Sidebar from "../components/Sidebar"





const Layout = () => {
    return (
           <div className='h-full relative flex bg-gray-100 items-start min-h-screen'>
                    <Sidebar/>
      
                <div className='flex-1 w-full overflow-hidden'>
                    <Outlet/>
                </div>
           </div>
    );
}


export default Layout;
