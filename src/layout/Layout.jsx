import React from 'react';
import Nav from '../components/Nav';
import { Link, NavLink, Outlet} from "react-router-dom";
import Button from '../components/Button';
import { RiMessengerFill} from "react-icons/ri";

import { GoHeart, GoHome } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiCompass, PiVideo } from 'react-icons/pi';
import { IoIosSearch } from 'react-icons/io';
import {  BsPlusSquare } from "react-icons/bs";




const SidebarLeft = () => {
    return (
        <div className='w-full py-6 bg-white h-screen border-r'>
            <div className='w-full flex flex-col'>
                <p className='text-2xl font-bold hover:text text-gray-800 mx-6 py-8'>My2hand</p>
                <div className='mx-4 space-y-3'>
                    <NavLink to={'/newfeed'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center'>
                            <GoHome size={30}></GoHome>
                        </div>
                        <span className='text-gray-800'>Trang chủ</span>
                    </NavLink>
                    <NavLink className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center'>
                            <IoIosSearch size={30}></IoIosSearch>
                        </div>
                        <span className='text-gray-800'>Tìm kiếm</span>
                    </NavLink>
                    <NavLink to={'/shop'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center'>
                            <HiOutlineShoppingBag size={28}></HiOutlineShoppingBag>
                        </div>
                        <span className='text-gray-800'>Mua sắm</span>
                    </NavLink>
                    <NavLink to={'/watch'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center'>
                            <PiVideo  size={30}></PiVideo>
                        </div>
                        <span className='text-gray-800'>Video</span>
                    </NavLink>
                    <NavLink to={'/explore'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center'>
                            <PiCompass  size={30}></PiCompass>
                        </div>
                        <span className='text-gray-800'>Khám phá</span>
                    </NavLink>
                    <NavLink to={'/favourite'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center'>
                            <GoHeart size={28}></GoHeart>
                        </div>
                        <span className='text-gray-800'>Đã lưu</span>
                    </NavLink>
                    <NavLink className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center'>
                            <BsPlusSquare size={23}></BsPlusSquare>
                        </div>
                        <span className='text-gray-800'>Tạo</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}


const Layout = () => {
    return (
           <div className='h-full relative flex bg-gray-100 items-start min-h-screen'>
                <div className='min-w-80 sticky top-0 flex'>
                    <SidebarLeft/>
                </div>
                <div className='flex-1 w-full overflow-hidden'>
                    <Outlet/>
                </div>
                <div className='fixed bottom-4 right-4'>
                    <Button variant='light' size='lg-icon' rounded='rounded-full' className="shadow-md hover:text-emerald-700 hover:!bg-white">
                        <RiMessengerFill size={24}/>
                    </Button>
                </div>
           </div>
    );
}


export default Layout;
