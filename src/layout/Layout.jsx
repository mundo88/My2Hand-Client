import React from 'react';
import Nav from '../components/Nav';
import { Outlet} from "react-router-dom";
import { RiHome5Fill,RiHome5Line,RiMessengerFill,RiGamepadFill,RiGamepadLine } from "react-icons/ri";
import { PiVideoFill,PiVideo } from "react-icons/pi";
import { IoStorefront,IoStorefrontOutline ,IoFastFoodOutline,IoFastFood } from "react-icons/io5";
import Button from '../components/Button';
import {  } from "react-icons/ri";
const Layout = () => {
    return (
           <div className='overflow-hidden h-screen'>
            <Nav className='px-4 shadow-[0px_1px_3px_0px_#00000024]'>
                <Nav.Col>
                    <Nav.Logo/>
                    <Nav.Searchbar width='72'/>
                </Nav.Col>
                <Nav.Col className={'justify-between'}>
                    <Nav.Item className='w-full' to='/newfeed'>
                        <RiHome5Fill size={28} className='group-[.active]:block hidden'/>
                        <RiHome5Line size={28} className='group-[.active]:hidden block'/>
                    </Nav.Item>
                    <Nav.Item className='w-full' to='/shop'>
                        <IoStorefront size={28} className='group-[.active]:block hidden'/>
                        <IoStorefrontOutline size={28} className='group-[.active]:hidden block'/>
                    </Nav.Item>
                    <Nav.Item className='w-full' to='/watch'>
                        <PiVideoFill size={28} className='group-[.active]:block hidden'/>
                        <PiVideo size={28} className='group-[.active]:hidden block'/>
                    </Nav.Item>
                    <Nav.Item className='w-full' to='/discover'>
                        <IoFastFood size={28} className='group-[.active]:block hidden'/>
                        <IoFastFoodOutline size={28} className='group-[.active]:hidden block'/>
                    </Nav.Item>                    
                    <Nav.Item className='w-full' to='/hot'>
                        <RiGamepadFill size={28} className='group-[.active]:block hidden'/>
                        <RiGamepadLine  size={28} className='group-[.active]:hidden block'/>
                    </Nav.Item>
                </Nav.Col>
            </Nav>
            <Outlet/>
            <div className='fixed bottom-4 right-4'>
                <Button variant='light' size='lg-icon' rounded='rounded-full' className="shadow-md hover:text-emerald-700 hover:!bg-white">
                    <RiMessengerFill size={24}/>
                </Button>
            </div>
           </div>
    );
}


export default Layout;
