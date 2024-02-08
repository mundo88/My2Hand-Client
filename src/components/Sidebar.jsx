
import React from 'react';
import { NavLink} from "react-router-dom";

import { GoHeart, GoHeartFill, GoHome, GoHomeFill } from "react-icons/go";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi2";
import { PiCompass, PiCompassFill, PiMessengerLogo, PiMessengerLogoFill, PiVideo, PiVideoFill } from 'react-icons/pi';
import { IoIosSearch } from 'react-icons/io';
import {  BsPlusSquare } from "react-icons/bs";
import { SlMenu } from "react-icons/sl";

const Sidebar = () => {
    return (
        <div className='w-full py-6 bg-white h-screen border-r'>
            <div className='w-full flex flex-col justify-between h-full'>
                <div>
                    <p className='text-2xl font-bold hover:text-gray-800 mx-6 mb-10'>My2hand</p>
                    <div className='mx-4 space-y-3'>
                        <NavLink to={'/newfeed'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                            {({isActive})=>(
                                isActive ?
                                <>
                                    <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                        <GoHomeFill className='text-gray-800' size={30}></GoHomeFill> 
                                    </div>
                                    <span className=' text-gray-800 font-bold'>Bảng tin</span>
                                </>
                                :
                                <>
                                    <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                        <GoHome className='text-gray-500' size={30}></GoHome> 
                                    </div>
                                    <span className=' text-gray-800'>Bảng tin</span>
                                </>
                            )}
                        </NavLink>
                        <NavLink to={'/search'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                            {({isActive})=>(
                                isActive ?
                                <>
                                    <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                        <IoIosSearch className='text-gray-800' size={30}></IoIosSearch> 
                                    </div>
                                    <span className=' text-gray-800 font-bold'>Tìm kiếm</span>
                                </>
                                :
                                <>
                                    <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                        <IoIosSearch className='text-gray-500' size={30}></IoIosSearch> 
                                    </div>
                                    <span className=' text-gray-800'>Tìm kiếm</span>
                                </>
                            )}
                        </NavLink>
                        <NavLink to={'/explore'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                            {({isActive})=>(
                                isActive ?
                                <>
                                    <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                        <PiCompassFill className='text-gray-800' size={30}></PiCompassFill> 
                                    </div>
                                    <span className=' text-gray-800 font-bold'>Khám phá</span>
                                </>
                                :
                                <>
                                    <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                        <PiCompass className='text-gray-500' size={30}></PiCompass> 
                                    </div>
                                    <span className=' text-gray-800'>Khám phá</span>
                                </>
                            )}
                        </NavLink>
                        <NavLink to={'/shop'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                            {({isActive})=>(
                                isActive ?
                                <>
                                    <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                        <HiShoppingBag className='text-gray-800' size={30}></HiShoppingBag> 
                                    </div>
                                    <span className=' text-gray-800 font-bold'>Mua sắm</span>
                                </>
                                :
                                <>
                                    <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                        <HiOutlineShoppingBag className='text-gray-500' size={30}></HiOutlineShoppingBag> 
                                    </div>
                                    <span className=' text-gray-800'>Mua sắm</span>
                                </>
                            )}
                        </NavLink>
                        <NavLink to={'/watch'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                            {({isActive})=>(
                                isActive ?
                                <>
                                    <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                        <PiVideoFill className='text-gray-800' size={30}></PiVideoFill> 
                                    </div>
                                    <span className=' text-gray-800 font-bold'>Video</span>
                                </>
                                :
                                <>
                                    <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                        <PiVideo className='text-gray-500' size={30}></PiVideo> 
                                    </div>
                                    <span className=' text-gray-800'>Video</span>
                                </>
                            )}
                        </NavLink>
                        <NavLink to={'/message'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                            {({isActive})=>(
                                isActive ?
                                <>
                                    <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                        <PiMessengerLogoFill className='text-gray-800' size={30}></PiMessengerLogoFill> 
                                    </div>
                                    <span className=' text-gray-800 font-bold'>Trò chuyện</span>
                                </>
                                :
                                <>
                                    <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                        <PiMessengerLogo className='text-gray-500' size={30}></PiMessengerLogo> 
                                    </div>
                                    <span className=' text-gray-800'>Trò chuyện</span>
                                </>
                            )}
                        </NavLink>
                        <NavLink to={'/saved'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                      
                            {({isActive})=>(
                                isActive ?
                                <>
                                    <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                        <GoHeartFill className='text-gray-800' size={30}></GoHeartFill> 
                                    </div>
                                    <span className=' text-gray-800 font-bold'>Đã lưu</span>
                                </>
                                :
                                <>
                                    <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                        <GoHeart className='text-gray-500' size={30}></GoHeart> 
                                    </div>
                                    <span className=' text-gray-800'>Đã lưu</span>
                                </>
                            )}
                        </NavLink>
                        <NavLink to={'/create'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                            <div className='w-9 h-9 overflow-hidden flex items-center justify-center'>
                                <BsPlusSquare className='text-gray-500 group-[.active]:text-gray-800' size={23}></BsPlusSquare>
                            </div>
                            <span className='group-[.active]:font-bold text-gray-800'>Tạo</span>
                        </NavLink>
                        <NavLink to={'/user/hihi'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                            <div className='w-9 h-9 overflow-hidden flex items-center justify-center rounded-full'>
                                <div>
                                    <img src="https://i.ex-cdn.com/mgn.vn/files/content/2022/09/12/0080vbacgy1h5zi72ra0dj34mo2cu4qp-1808.jpg" className='w-7 h-7 object-cover rounded-full' alt="" />
                                </div>
                            </div>
                            <span className='group-[.active]:font-bold text-gray-800'>Trang cá nhân</span>
                        </NavLink>
                    </div>
                </div>
                <div className='px-4'>
                    <NavLink to={'/newfeed'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                        <SlMenu className='text-gray-500 group-[.active]:text-gray-800' size={20}></SlMenu>
                        </div>
                        <span className='group-[.active]:font-bold text-gray-800'>Xem thêm</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
