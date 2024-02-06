import React from 'react';
import { Outlet} from "react-router-dom";
import Button from '../components/Button';
import { RiMessengerFill} from "react-icons/ri";

import Sidebar from "../components/Sidebar"





const Layout = () => {
    return (
           <div className='h-full relative flex bg-gray-100 items-start min-h-screen'>
                <div className='min-w-80 sticky top-0 flex'>
                    <Sidebar/>
                </div>
                <div className='flex-1 w-full overflow-hidden'>
                    <Outlet/>
                </div>
                {/* <div className='fixed bottom-4 right-4'>
                    <Button variant='light' size='lg-icon' rounded='rounded-full' className="shadow-md hover:text-emerald-700 hover:!bg-white">
                        <RiMessengerFill size={24}/>
                    </Button>
                </div> */}
           </div>
    );
}


export default Layout;
